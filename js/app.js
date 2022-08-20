// Search form
const searchBTN = document.querySelector(".searchBTN");
const form = document.querySelector(".form");
const checkInputs = document.querySelectorAll(".checkInput");
const checkText = `
                <span class="checkText">This field is required</span>
                `;
const checkTextFormat = `
                <span class="checkText">Format is not valid</span>
                `;
const time = new Date();
const checkInInput = document.querySelector("#inputCheckIn");
const checkOutInput = document.querySelector("#inputCheckOut");

// Search Availabilty function start
searchBTN.addEventListener("click", function searchAvailaility(e) {
  e.preventDefault();
  const day = time.getDate() + time.getMonth() + 1 + time.getFullYear();
  const checkInInputDate = `${checkInInput.value.slice(
    4,
    8
  )}-${checkInInput.value.slice(2, 4)}-${checkInInput.value.slice(0, 2)}`;
  const checkOutInputDate = `${checkOutInput.value.slice(
    4,
    8
  )}-${checkOutInput.value.slice(2, 4)}-${checkOutInput.value.slice(0, 2)}`;
  //---------------------------------------------------
  for (let inputs of checkInputs) {
    if (
      inputs.value.length < 8 ||
      inputs.value.length > 8 ||
      !Number(inputs.value) ||
      isNaN(
        new Date(
          `${inputs.value.slice(4, 8)}-${inputs.value.slice(
            2,
            4
          )}-${inputs.value.slice(0, 2)}`
        )
      ) ||
      new Date(
        `${inputs.value.slice(4, 8)}-${inputs.value.slice(
          2,
          4
        )}-${inputs.value.slice(0, 2)}`
      ) < time
    ) {
      if (inputs.value == "") {
        if (!inputs.nextElementSibling) {
          inputs.insertAdjacentHTML("afterend", checkText);
        } else if (
          inputs.nextElementSibling.innerHTML == "Format is not valid"
        ) {
          inputs.nextElementSibling.innerHTML = "This field is required";
        }
      } else {
        inputs.insertAdjacentHTML("afterend", checkTextFormat);
        inputs.value = "";
      }
    } else if (new Date(checkInInputDate) >= new Date(checkOutInputDate)) {
      document
        .querySelector("#inputCheckOut")
        .insertAdjacentHTML("afterend", checkTextFormat);
      document.querySelector("#inputCheckIn").value = checkInInput.value;
      document.querySelector("#inputCheckOut").value = "";
      break;
    }
  }
});
// End Search Availabilty
// Input Error Delete Function Start
function deleteError(e) {
  if (e.nextElementSibling) {
    e.nextElementSibling.remove();
  }
}
// End Input Error Delete Function Start
//--------------------------------------------------------------
//Slider
const photos = document.querySelector(
  ".page__right__header__photoDown"
).children;
const homePhoto = document.querySelector(
  ".page__right__header__photoUp__box"
).children;
const info = document.querySelector(".page__right__header__photoUp__info");
for (let photo of photos) {
  photo.addEventListener("click", function () {
    for (let photo of photos) {
      if (photo.children[0] !== this.children[0]) {
        photo.children[0].classList.remove("slide");
        photo.children[0].classList.add("slideHover");
      } else {
        photo.children[0].classList.remove("slideHover");
        photo.children[0].classList.add("slide");
      }
    }

    for (let img of homePhoto) {
      if (this.children[0].alt == img.alt) {
        img.style.display = "block";
        info.innerHTML = `${this.children[0].alt}`;
      } else {
        img.style.display = "none";
      }
    }
  });
}
function myFunction(event) {
  console.log();
}
//End Slider
//--------------------------------------------------------------
//Modal Email Check
let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
document.querySelector(".modalBTN").addEventListener("click", function (e) {
  e.preventDefault();
  const modalInput = document.querySelector(".modalEmail");
  if (!email.test(modalInput.value)) {
    document.querySelector(".checkEmailText").style.display = "block";
  } else {
    document.querySelector(".modal-window").style.opacity = "0";
    document.querySelector(".modal-window").style.visibility = "hidden";
  }
});

function deleteEmailError() {
  if (document.querySelector(".checkEmailText").style.display == "block") {
    document.querySelector(".checkEmailText").style.display = "none";
  }
}

//End Modal Check
//--------------------------------------------------------------
//Message Check
document.querySelector(".messageBTN").addEventListener("click", function (e) {
  e.preventDefault();
  const form = document.querySelector(".messageForm").children;
  for (let input of form) {
    if (input.tagName == "INPUT") {
      if (input.value == "") {
        input.nextElementSibling.style.display = "block";
      } else if (
        input.type == "email" &&
        input.value !== "" &&
        !email.test(input.value)
      ) {
        document.querySelector(".checkEmail").style.display = "block";
      }
    }
  }
});
function deleteMessageError(e) {
  console.log(e.type);
  if (e.nextElementSibling.style.display == "block") {
    e.nextElementSibling.style.display = "none";
  }
  if (e.type == "email") {
    document.querySelector(".checkEmail").style.display = "none";
  }
}

//End Message Check
//--------------------------------------------------------------
//Responsive Menu Click
const pageLeft = document.querySelector(".page__left");
const darkBG = document.querySelector(".page__dark__BG");
const closePageLeftBTN = document.querySelector(".page__left__closeBTN");
document
  .querySelector(".page__navbar__menuIcon")
  .addEventListener("click", function () {
    pageLeft.style.display = "block";
    pageLeft.style.zIndex = "8";
    darkBG.style.display = "block";
    closePageLeftBTN.style.display = "flex";
  });
darkBG.addEventListener("click", () => {
  pageLeft.style.display = "none";
  darkBG.style.display = "none";
  closePageLeftBTN.style.display = "none";
});
closePageLeftBTN.addEventListener("click", () => {
  pageLeft.style.display = "none";
  darkBG.style.display = "none";
  closePageLeftBTN.style.display = "none";
});
//Responsive Menu Click
//--------------------------------------------------------------
//Responsive Left Side Zoom And Out
function myFunction(x) {
  if (x.matches) {
    pageLeft.style.display = "block";
    darkBG.style.display = "none";
    closePageLeftBTN.style.display = "none";
  } else {
    pageLeft.style.display = "none";
  }
}
let x = window.matchMedia("(min-width: 992px)");
myFunction(x);
x.addListener(myFunction);
//End Responsive Left Side Zoom And Out
