const id = document.querySelector(".idpw__id");
const pw = document.querySelector(".idpw__pw");
const btn = document.querySelector(".login__btn");

const handleClick = () => {
  const inputId = id.value;
  const inputPw = pw.value;
  if (inputId === "root" && inputPw === "root") {
    alert(`id: ${inputId}, pw: ${inputPw}, 로그인 성공!!`);
    location.href = "./dashboard/index.html";
  } else {
    alert("로그인 실패!!");
  }
};

const handleChange = (event) => {
  if (event.target.value !== "") {
    btn.style.backgroundColor = "#0984e3";
  } else {
    btn.style.backgroundColor = "c0dffd";
  }
};

btn.addEventListener("click", handleClick);
id.addEventListener("change", handleChange);
