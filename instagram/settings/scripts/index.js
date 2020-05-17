const cog = document.querySelector(".cog");
const modal = document.querySelector(".modal");
const bg = document.querySelector(".bg");
const body = document.querySelector("body");
const cancelBtn = document.querySelector(".last-icon");
const articles = document.querySelector(".articles");
const articlesBg = document.querySelector(".articles__bg");
const articlesInfo = document.querySelector(".articles__info");

const data = [
  {
    id: "c01d_br0th3r",
    img: "../images/dogsTwo.jpeg",
    likes: "4,796",
    content: "먹지 말랬다",
  },
  {
    id: "react_idol",
    img: "../images/react.jpeg",
    likes: "17,426",
    content:
      "리액트 Hooks 적용하기<br><br>Hooks의 등장은 많은 것을 편리하게 만들어 주었습니다. 클래스형 컴포넌트에 의존했던 JS를 함수형으로 작성될 수 있게끔 만들어주었죠. 언어는 언어에 맞게 써야 하잖아요 ㅎㅎ..🙂",
  },
  {
    id: "algorithm_is_hard",
    img: "../images/algo.jpeg",
    likes: "8,645",
    content:
      "DFS와 BFS<br><br>이 두 친구는 최단거리를 찾는 알고리즘입니다. 전자는 재귀, 후자는 큐를 이용해요.",
  },
];

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

function handleMouseEnter() {
  articlesBg.classList.remove("hide");
  articlesInfo.classList.remove("hide");
}

function handleMouseOut() {
  articlesBg.classList.add("hide");
  articlesInfo.classList.add("hide");
}

cog.addEventListener("click", handleClick);
window.addEventListener("click", handleOutsideClick);
cancelBtn.addEventListener("click", handleCancelClick);
articles.addEventListener("mouseover", handleMouseEnter);
articles.addEventListener("mouseout", handleMouseOut);
