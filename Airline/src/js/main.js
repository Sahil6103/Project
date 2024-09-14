/* ------------------------- sidebar menu open close ------------------------ */

document.querySelector(".toggle").addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("translate-x-full");
});

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector("nav").classList.add("translate-x-full");
});

/* --------------------------- back to top button --------------------------- */

let topbtn = document.querySelector(".topbtn");

window.onscroll = () => {
  scrollToTop();
};

function scrollToTop() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    topbtn.style = "transform: scale(1)";
  } else {
    topbtn.style = "transform: scale(0)";
  }
}

topbtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ? ----------------- import functions which is going to help for the validation of forms ------------------

import {
  errorMessage,
  checkEmail,
  checkPassword,
  checkFirstName,
  checkLastName,
  checkMobileNumber,
  checkBirthDate,
  checkFullname,
  checkMessage,
  checkFlyFrom,
  checkFlyTo,
  checkDeptDate,
  checkAdultTicket,
  checkChildrenTicket,
  checkLoggedIn,
} from "./validation.js";

/* ---------------------------- login validation ---------------------------- */

let loginbtn = document.querySelector("#loginbtn");

if (loginbtn) {
  loginbtn.addEventListener("click", (e) => {
    if (checkEmail() == false || checkPassword() == false) {
      e.preventDefault();
    } else {
      e.preventDefault();
      checkLoggedIn();
    }
  });
}

/* --------------------------- sign up validation --------------------------- */

let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let mno = document.querySelector("#mno");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let signupbtn = document.querySelector("#signupbtn");

// Event listener for signup button
if (signupbtn) {
  signupbtn.addEventListener("click", (e) => {
    // Perform all validation checks
    if (
      !checkFirstName() ||
      !checkLastName() ||
      !checkMobileNumber() ||
      !checkEmail() ||
      !checkPassword() ||
      !checkBirthDate()
    ) {
      e.preventDefault(); // Prevent form submission if any validation fails
    } else {
      e.preventDefault(); // Prevent form submission temporarily

      let emailinp = document.querySelector("#email");
      let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Check for duplicate email
      let duplicateEmail = storedUsers.find(
        (user) => user.email === emailinp.value
      );

      if (duplicateEmail) {
        errorMessage("This email already registered!");
      } else {
        getData(); // Call your registration function to handle data storage
      }
    }
  });
}

// ?  ---------------------------- USER'S DATA ----------------------------

// creating an array of users which contains object of users data which is stored into localstorage, if any data stored into localstorage than userArr will be not empty otherwise it will be empty.
// The reason behind this logic is, if we create array empty than everytime userArr will be rewrite by the new value, that's why we get data from the localstorage if data stored in it.

let usersArr = JSON.parse(localStorage.getItem("users")) || [];

// Function to save user data
function getData() {
  let usersObj = {
    firstname: fname.value,
    lastname: lname.value,
    mobileNo: mno.value,
    email: email.value,
    password: password.value,
  };

  usersArr.push(usersObj);
  saveUser();

  // Store initials in local storage
  let initial = usersObj.firstname.charAt(0).toUpperCase();
  localStorage.setItem("userInitial", initial);

  // Redirect to index.html after successful registration
  window.location.href = "index.html";
}

// Save users to local storage
function saveUser() {
  localStorage.setItem("users", JSON.stringify(usersArr));
}

// Display user initials if available
function displayUserInitial() {
  let userInitial = localStorage.getItem("userInitial");

  if (userInitial) {
    // Hide the login button
    document.querySelector(".login").classList.add("hidden");

    // Show the user initials and popup
    let userDiv = document.querySelector(".user");
    let userInitialSpan = userDiv.querySelector(".userinitial");

    userInitialSpan.textContent = userInitial;
    userDiv.classList.remove("hidden");

    // Optionally, add a click event for logout
    userDiv.querySelector(".userpopup").addEventListener("click", () => {
      localStorage.removeItem("userInitial");
      window.location.reload(); // Reload to reset the state
    });
  }
}

// Call displayUserInitial to show initials if user is logged in
displayUserInitial();

/* ------------------------------ contact form ------------------------------ */

let sendBtn = document.querySelector("#sendbtn");

if (sendBtn) {
  sendBtn.addEventListener("click", (e) => {
    if (
      checkFullname() == false ||
      checkEmail() == false ||
      checkMobileNumber() == false ||
      checkMessage() == false
    ) {
      e.preventDefault();
    }
  });
}
/* ------------------------- booking form validation ------------------------ */
import { getFlights } from "./flights.js";

let showbtn = document.querySelector("#showbtn");

if (showbtn) {
  showbtn.addEventListener("click", (e) => {
    if (
      checkFlyFrom() == false ||
      checkFlyTo() == false ||
      checkDeptDate() == false ||
      checkAdultTicket() == false ||
      checkChildrenTicket() == false
    ) {
      e.preventDefault();
    } else {
      getFlights();
    }
  });
}

/* ----------------------------- one way flight ----------------------------- */

let onewayInp = document.querySelector("#oneway");
let returning = document.querySelector(".returning");
let roundInp = document.querySelector("#round");

if (roundInp) {
  roundInp.addEventListener("click", () => {
    returning.style.display = "initial";
  });
}

if (onewayInp) {
  onewayInp.addEventListener("click", () => {
    returning.style.display = "none";
  });
}

/* -------------------------- password show / hide -------------------------- */

let showIcon = document.querySelector(".showicon");

if (showIcon)
  showIcon.addEventListener("click", () => {
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  });
