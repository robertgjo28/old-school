const clc = document.querySelectorAll(".cancel");
const arr = document.querySelectorAll(".arr_container");
const left_container = document.querySelectorAll(".left-container");

arr.forEach((ai, i) => {
  ai.addEventListener('click', () => {
    ai.classList.add('active_arr');
    if (left_container[i].classList.contains("off")) {
      left_container[i].classList.remove("off");
      left_container[i].classList.add("active");
    }
  });
});

clc.forEach((cancel, i) => {
  cancel.addEventListener("click", () => {
    arr[i].classList.remove("active_arr");
    if (left_container[i].classList.contains("active")) {
      left_container[i].classList.remove("active");
      left_container[i].classList.add("off");
    }
  });
});

const sun = "assets/img/sun.png";
const moon = "assets/img/moon.png"

var theme = "dark";
const root = document.querySelector(":root");
const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");
const darkSide = document.body;

container.addEventListener("click", setTheme);
function setTheme() {
  switch (theme) {
    case "dark":
      setLight();
      theme = "light";
      break;
    case "light":
      setDark();
      theme = "dark";
      break;
  }
}
function setLight() {
  container.classList.remove("shadow-light");
  setTimeout(() => {
    darkSide.classList.add("dark-mode");
    container.classList.add("shadow-dark");
    themeIcon.classList.remove("change");
  }, 300);
  themeIcon.classList.add("change");
  themeIcon.src = moon;
}
function setDark() {
  container.classList.remove("shadow-dark");
  setTimeout(() => {
    darkSide.classList.remove("dark-mode");
    container.classList.add("shadow-light");
    themeIcon.classList.remove("change");
  }, 300);
  themeIcon.classList.add("change");
  themeIcon.src = sun;
}