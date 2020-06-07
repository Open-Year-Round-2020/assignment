const id = document.querySelector(".verify_id");
const pw = document.querySelector(".verify_pw");
const btn = document.querySelector(".login-button");

const handleClick = () => {
  const inputId = id.value;
  const inputPw = pw.value;

  let regexp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (!regexp.test(inputId)) {
    alert("이메일 형식에 맞지 않습니다.");
    id.select();
    id.focus();
    return false;
  }

  if (inputId === "admin@admin.com" && inputPw === "admin") {
    alert("Hyung_Junny님, 환영합니다!");
    window.location.href = "./login/index.html";
  } else {
    alert("입력하신 정보가 올바르지 않습니다.");
  }
};


btn.addEventListener("click", handleClick);
