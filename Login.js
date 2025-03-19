document.addEventListener("DOMContentLoaded", (event) => {
  const rotateCard = () => {
    const cardContainer = document.querySelector(".card-container");
    cardContainer.classList.toggle("rotate");
  };

  const btnSignup = document.querySelector("#btn-signup"),
    btnLogin = document.querySelector("#btn-login");

  btnSignup.addEventListener("click", rotateCard);
  btnLogin.addEventListener("click", rotateCard);

  /* Show/Hide Password */
  const seePassword = () => {
    const seePwdIcon = document.querySelector(".see-password"),
      pwdInput = document.querySelector(".group input");

    seePwdIcon.addEventListener("mousedown", () => {
      pwdInput.type = "text";
    });

    seePwdIcon.addEventListener("mouseup", () => {
      pwdInput.type = "password";
    });

    seePwdIcon.addEventListener("mouseover", () => {
      pwdInput.type = "password";
    });
  };

  seePassword();

  // **Handle Login Form Submission**
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    window.location.href = "Home.html"; // Redirect to home page
  });

  // **Handle Signup Form Submission**
  document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    window.location.href = "Home.html"; // Redirect to home page after signup
  });
});
