const cog = document.querySelector(".cog");
const modal = document.querySelector(".modal");
const bg = document.querySelector(".bg");
const body = document.querySelector("body");
const cancelBtn = document.querySelector(".last-icon");

function handleClick() {
  bg.style.height = `${document.body.scrollHeight}px`;
  modal.classList.remove("hide");
  bg.classList.remove("hide");
  body.style.overflow = "hidden";
}

function handleOutsideClick(event) {
  if (event.target === bg) {
    modal.classList.add("hide");
    bg.classList.add("hide");
    body.style.overflow = "scroll";
  }
}

function handleCancelClick() {
  modal.classList.add("hide");
  bg.classList.add("hide");
  body.style.overflow = "scroll";
}

cog.addEventListener("click", handleClick);
window.addEventListener("click", handleOutsideClick);
cancelBtn.addEventListener("click", handleCancelClick);
