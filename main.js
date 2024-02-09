document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinks = document.querySelector(".nav-links");

  burgerMenu.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mon-slider", {
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll("li.tab");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (tab) {
        tab.classList.remove("tab-active");
      });
      const contents = document.querySelectorAll(".content");
      contents.forEach(function (content) {
        content.classList.remove("active");
      });
      this.classList.add("tab-active");
      
      if (this.classList.contains("tab-1971")) {
        document.querySelector(".content-1971").classList.add("active");
      } else if (this.classList.contains("tab-1985")) {
        document.querySelector(".content-1985").classList.add("active");
      } else if (this.classList.contains("tab-1996")) {
        document.querySelector(".content-1996").classList.add("active");
      } else if (this.classList.contains("tab-2012")) {
        document.querySelector(".content-2012").classList.add("active");
      }
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const toggleDarkModeButton = document.querySelector(".toggle-dark-mode");

  toggleDarkModeButton.addEventListener("click", function () {
    const body = document.body;

    body.classList.toggle("dark");
  });
});


let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let errorContainer = document.querySelector(".message-error");
  let errorList = document.querySelector(".message-error ul");

  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  let email = document.querySelector("#email");
  if (email.value == "") {
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le texte email ne peut pas être vide";

    errorList.appendChild(err);
  } else {
    email.classList.add("success");
  }

  let firstname = document.querySelector("#firstname");

  if (firstname.value.length < 6) {
    errorContainer.classList.add("visible");
    firstname.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "L'email ne peut pas être inférieur à 6 caractères";

    errorList.appendChild(err);
  } else {
    firstname.classList.add("success");
  }
  letpassCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );

  let successContainer = document.querySelector(".message-success");
  successContainer.classList.remove("visible");

  if (
    email.classList.contains("success") &&
    email.classList.contains("success") &&
    email.classList.contains("success") &&
    email.classList.contains("success")
  ) {
    successContainer.classList.add("visible");
  }
});





