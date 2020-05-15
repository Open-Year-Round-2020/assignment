const container = document.querySelector(".container");
const dots = document.querySelector(".user__dots");
const bg = document.querySelector(".bg");
const modal = document.querySelector(".modal");
const cancelBtn = modal.querySelector(".last-icon");
const recommend = document.querySelector(".container__recommend");
const header = document.querySelector(".header");

function handleClick() {
  modal.classList.remove("hide");
  bg.classList.remove("hide");
}

function handleOutsideClick(event) {
  if (event.target === bg) {
    modal.classList.add("hide");
    bg.classList.add("hide");
  }
}

function handleCancleClick() {
  modal.classList.add("hide");
  bg.classList.add("hide");
}

function handleResize() {
  let offset = container.offsetLeft + 610 + 20;
  recommend.style.left = `${offset}px`;
  header.style.padding = `0 ${container.offsetLeft}px`;
}

function init() {
  let offset = container.offsetLeft + 610 + 20;
  recommend.style.left = `${offset}px`;
  header.style.padding = `0 ${container.offsetLeft}px`;
}

init();
window.addEventListener("resize", handleResize);
dots.addEventListener("click", handleClick);
window.addEventListener("click", handleOutsideClick);
cancelBtn.addEventListener("click", handleCancleClick);
