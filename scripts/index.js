const dots = document.querySelector(".dots");
const modal = document.querySelector(".modal");
const modalList = document.querySelector(".modal_tags");
const gear = document.querySelector(".gear");
const bg = document.querySelector(".bg");
const cancelBtn = document.querySelector(".cancelbox");
const recommend = document.querySelector(".container__recommend");
const header = document.querySelector(".header");
const body = document.querySelector("body");

function handleClick(){
  if(modal.classList.contains("hide"))
  {
    modal.classList.remove("hide");
  }
  else
  {
    modal.classList.add("hide");
  }
}

function handleOutsideClick(event)
{
  if(event.target !== dots || event.target !==cancelBtn)
  {
    let flag =0;
    for(let i=0; i<6; i++)
    {
      if(event.target===modalList[i])
      {
        flag=1;
        break;
      }
    }
    if(!flag) modal.classList.add("hide");
  }

  if(event.target === bg)
  {
    modal.classList.add("hide");
    bg.classList.add("hide");
  }
}

dots.addEventListener("click", handleClick);
window.addEventListener("click", handleOutsideClick);
