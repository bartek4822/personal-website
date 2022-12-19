const themeButton = document.querySelector("nav button");

let theme = localStorage.getItem("theme"); // "dark";

themeButton.addEventListener("click", () => {
  if (theme === "light") {
    document.querySelector("body").classList.remove("light");
    theme = "dark";
  } else {
    document.querySelector("body").classList.add("light");
    theme = "light";
  }
  localStorage.setItem("theme", theme);
});

console.log(theme + " mode detected");
if (theme === "light") {
  document.querySelector("body").classList.add("light");
}
