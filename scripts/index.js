const dots = document.querySelector(".dots");
const modal = document.querySelector(".modal");
const modalList = document.querySelector(".modal_tags");
const gear = document.querySelector(".gear");

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
  if(event.target !== dots)
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
}

dots.addEventListener("click", handleClick);
window.addEventListener("click", handleOutsideClick);

function handleOutsideClick(event)
{
  if(event.target !== gear)
  {
    let flag =0;
    for(let i=0; i<9; i++)
    {
      if(event.target===modalList[i])
      {
        flag=1;
        break;
      }
    }
    if(!flag) modal.classList.add("hide");
  }
}

gear.addEventListener("click", handleClick);
window.addEventListener("click", handleOutsideClick);
