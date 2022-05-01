let closeBtn = document.querySelector("ul .close");
let list = document.querySelector("ul");
let text = document.querySelectorAll("ul li a");
let leftSection = document.querySelector(".container .left");
let burger_menu = document.querySelector(".container .burger-menu");
let openText = document.querySelector(".container .left .openText");
closeBtn.addEventListener("click", () => {
  text.forEach((e) => {
    e.classList.remove("show");
  });
  leftSection.classList.remove("reset");
  leftSection.classList.remove("convertwid");
  list.classList.remove("convert");
  mainBody.classList.remove("hidden");
});

if (window.screen.width >= 767) {
  leftSection.setAttribute("data-aos", "zoom-in");
}

burger_menu.addEventListener("click", () => {
  text.forEach((e) => {
    e.classList.add("show");
  });

  if (window.screen.width >= 991) {
    list.classList.add("convert");
    leftSection.classList.add("reset");
  }

  if (window.screen.width <= 990) {
    list.classList.add("convert");
    leftSection.classList.add("convertwid");
    mainBody.classList.add("hidden");
  }
});

openText.addEventListener("click", () => {
  openText.classList.toggle("ac");
  leftSection.classList.toggle("reset");
  leftSection.classList.toggle("convertwid");
  text.forEach((e) => {
    e.classList.toggle("show");
  });
});

let openSearch = document.querySelector(".container i.showSearch");
let form = document.querySelector(".search form");
let search = document.querySelector(".search");
let mainBody = document.querySelector("body");
openSearch.addEventListener("click", () => {
  form.classList.toggle("shows");
  search.classList.toggle("navSearch");
  mainBody.classList.toggle("hidden");
  openSearch.classList.toggle("chnColor");
});

let scrollTop = document.querySelector(".scroll-top");

window.onscroll = function () {
  if (window.scrollY >= 125) {
    scrollTop.classList.add("scright");
  } else {
    scrollTop.classList.remove("scright");
  }
};

scrollTop.addEventListener("click", () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// scroll box
let scrollLeft = document.querySelectorAll(".img-container .iconswitch .leftI");
let img_container = document.querySelectorAll(".main-content .img-container");
let scrollRight = document.querySelectorAll(
  ".img-container .iconswitch .rightI"
);
let endBox = document.querySelectorAll(".container .img-container .end");

scrollLeft.forEach((left) => {
  left.addEventListener("click", (e) => {
    e.currentTarget.parentElement.parentElement.scrollBy({
      top: 0,
      left: -700,
      behavior: "smooth",
    });
  });
});

scrollRight.forEach((right) => {
  right.addEventListener("click", (e) => {
    e.currentTarget.parentElement.parentElement.scrollBy({
      top: 0,
      left: 700,
      behavior: "smooth",
    });
  });
});
