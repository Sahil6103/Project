// fucntion for error message
export function errorMessage(msg) {
  let error = document.querySelector("#error");
  error.innerHTML = `
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-[8px]" role="alert">
                    <span class="block sm:inline">
                    ${msg}
                    </span>
                </div>
    `;
}

// fucntion for validating email
export function checkEmail() {
  let email = document.querySelector("#email");
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email.value === "") {
    errorMessage("Please Enter Email Address!");
    email.focus();
    return false;
  } else if (!emailRegex.test(email.value)) {
    errorMessage("Enter Valid Email!");
    email.focus();
    return false;
  }
  return true;
}

// fucntion for validating password
export function checkPassword() {
  let password = document.querySelector("#password");
  let passwordRegex = /^[a-zA-Z0-9]{6,20}$/;

  error.innerHTML = "";

  if (!password.value) {
    errorMessage("Enter Password!");
    password.focus();
    return false;
  } else if (!passwordRegex.test(password.value)) {
    errorMessage("You have to enter password 6 to 20 letter long!");
    password.focus();
    return false;
  }
  return true;
}

// fucntion for validating firstname
export function checkFirstName() {
  let firstNameRegex = /^[a-zA-Z\s-]+$/;

  error.innerHTML = "";

  if (!fname.value) {
    errorMessage("Enter First name!");
    fname.focus();
    return false;
  } else {
    if (!firstNameRegex.test(fname.value)) {
      errorMessage("Enter correct first name!");
      fname.focus();
      return false;
    }
    return true;
  }
}

// fucntion for validating last name
export function checkLastName() {
  let lastNameRegex = /^[a-zA-Z\s-]+$/;

  error.innerHTML = "";

  if (!lname.value) {
    errorMessage("Enter last name!");
    lname.focus();
    return false;
  } else {
    if (!lastNameRegex.test(lname.value)) {
      errorMessage("Enter correct last name!");
      lname.focus();
      return false;
    }
    return true;
  }
}

// fucntion for validating mobile number
export function checkMobileNumber() {
  let mobileRegex = /^[6-9]\d{9}$/;

  error.innerHTML = "";

  if (!mno.value) {
    errorMessage("Enter Mobile Number!");
    mno.focus();
    return false;
  } else {
    if (!mobileRegex.test(mno.value)) {
      errorMessage("Enter valid Mobile Number!");
      mno.focus();
      return false;
    }
    return true;
  }
}

// fucntion for validating birth date
export function checkBirthDate() {
  let bDate = document.querySelector("#bdate");

  error.innerHTML = "";

  if (!bDate.value) {
    errorMessage("Select Birth Date!");
    bDate.focus();
    return false;
  }
  return true;
}

// fucntion for validating fullanme
export function checkFullname() {
  let fullname = document.querySelector("#fullname");
  let fullNameRegex = /^[a-zA-Z\s-]+$/;

  error.innerHTML = "";

  if (!fullname.value) {
    errorMessage("Enter full name!");
    fullname.focus();
    return false;
  } else {
    if (!fullNameRegex.test(fullname.value)) {
      errorMessage("Enter correct full name!");
      fullname.focus();
      return false;
    }
    return true;
  }
}

export function checkMessage() {
  let message = document.querySelector("#message");
  error.innerHTML = "";

  if (!message.value) {
    errorMessage("Enter Your Feedback / Inquiry / Query");
    message.focus();
    return false;
  }
  return true;
}

export function checkFlyFrom() {
  let flyFrom = document.querySelector("#fly-from");

  if (!flyFrom.value) {
    errorMessage("Enter Your Location");
    flyFrom.focus();
    return false;
  }
  return true;
}

export function checkFlyTo() {
  let flyTo = document.querySelector("#fly-to");

  if (!flyTo.value) {
    errorMessage("Enter Your Destination");
    flyTo.focus();
    return false;
  }
  return true;
}

export function checkDeptDate() {
  let deptDate = document.querySelector("#dept-date");

  if (!deptDate.value) {
    errorMessage("Select Departing Date");
    deptDate.focus();
    return false;
  }
  return true;
}

export function checkAdultTicket() {
  let adultTicket = document.querySelector("#adult-ticket");

  if (adultTicket.value > 20) {
    errorMessage("You can not get adult tickets more than 20");
    adultTicket.focus();
    return false;
  } else if (adultTicket.value < 0) {
    errorMessage("You can't select 0 tickets!");
    adultTicket.focus();
    return false;
  }
  return true;
}

export function checkChildrenTicket() {
  let childrenTicket = document.querySelector("#child-ticket");

  if (childrenTicket.value > 10) {
    errorMessage("You can not get children tickets more than 10");
    childrenTicket.focus();
    return false;
  }
  return true;
}

// Login function to get user initials and redirect
export function checkLoggedIn() {
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");

  let storedUser = JSON.parse(localStorage.getItem("users")) || [];

  let validUser = storedUser.find(
    (user) => user.email === email.value && user.password === password.value
  );

  if (validUser) {
    // Store the initial of the logged-in user
    let initial = validUser.firstname.charAt(0).toUpperCase();
    localStorage.setItem("userInitial", initial);

    // Redirect to index.html after successful login
    window.location.href = "index.html";
  } else {
    errorMessage(
      "Your Email or Password wrong or maybe You are not memeber, create an account to become member!"
    );
  }
}
