"use strict";
let btn = document.querySelectorAll(".show-modal");
let windowInformaion = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let closebutton = document.querySelector(".close-modal");
function toggleOpenCloseWindow() {
  if (windowInformaion.classList.contains("hidden")) {
    overlay.classList.remove("hidden");
    return windowInformaion.classList.remove("hidden");
  }
  overlay.classList.add("hidden");
  return windowInformaion.classList.add("hidden");
}
closebutton.addEventListener("click", toggleOpenCloseWindow);
btn.forEach((element) => {
  element.addEventListener("click", toggleOpenCloseWindow);
});
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    if (!windowInformaion.classList.contains("hidden")) {
      overlay.classList.add("hidden");
      return windowInformaion.classList.add("hidden");
    }
  }
});
