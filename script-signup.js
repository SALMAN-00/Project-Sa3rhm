//Sign Up
let containerSignup = document.getElementById("container");
let usernameSignup = document.getElementById("inputUsernameSignup");
let emailSignup = document.getElementById("inputEmailSignup");
let passwordSignup = document.getElementById("inputPasswordSignup");
let confirmPasswordSignup = document.getElementById(
  "inputConfirmPasswordSignup"
);
let checkboxTerms = document.getElementById("checkbox-Terms");

let buttonSignup = document.getElementById("button-Signup");
let massageSignup = document.getElementById("massage-Signup");

let usernameSignupValid = /^[a-zA-Z0-9]{4,25}$/;
let emailSignupValid = /^[A-Za-z0-9_\-]+@[A-Za-z0-9_\-]+\.[A-Za-z]{2,4}$/;
let passwordSignupValid = /^.{8,15}$/;

buttonSignup.addEventListener("click", () => {
  if (
    usernameSignup.value === "" ||
    emailSignup.value === "" ||
    passwordSignup.value === "" ||
    confirmPasswordSignup.value === ""
  ) {
    massageSignup.innerHTML = "المدخلات فارغة الرجاء تعبيتها";
  } else if (
    usernameSignup.value != usernameSignup.value.match(usernameSignupValid)
  ) {
    massageSignup.innerHTML = "اسم المستخدم لابد ان يكون اكثر من 4 احرف";
  } else if (emailSignup.value != emailSignup.value.match(emailSignupValid)) {
    massageSignup.innerHTML = "ايميل غير صالح";
  } else if (
    passwordSignup.value != passwordSignup.value.match(passwordSignupValid)
  ) {
    massageSignup.innerHTML =
      "كلمة السر غير صالحة كلمة السر تحتوي على 8 احرف على الاقل";
  } else if (passwordSignup.value != confirmPasswordSignup.value) {
    massageSignup.innerHTML = "كلمة السر غير متطابقة ";
  } else if (!checkboxTerms.checked) {
    massageSignup.innerHTML = "الرجاء الموافقة على الشروط والبنود ";
  } else {


    fetch("https://655273ad5c69a779032a0b90.mockapi.io/SignUp", {
      method: "POST",
      body: JSON.stringify({
        username: usernameSignup.value,
        email: emailSignup.value,
        password: passwordSignup.value,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then(response => response.json())
      .then(json => (window.location.href = "login.html"));
  }
});
