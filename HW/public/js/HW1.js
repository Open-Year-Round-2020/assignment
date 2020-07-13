function page_href() {
    location.href = "peedPage";
}

function log_in() {
    var ID = document.getElementById("ID").value;
    var PASSWORD = document.getElementById("PASSWORD").value;
    for (i = 0; i < userInfo.length; i++) {
        if (ID === userInfo[i].id && PASSWORD === userInfo[i].password) {
            alert("로그인 되었습니다.\n\nid : " + ID + "\npassword : " + PASSWORD);
            page_href();
            return;
        }
    }
}

// submit 버튼
function color_change() {
    var numId = document.getElementById("ID").value.length;
    var numPass = document.getElementById("PASSWORD").value.length;

    if (numId >= 1 && numPass >= 6) {
        document.getElementById("logIn_button").style.backgroundColor = "#0095f6";
    } else {
        document.getElementById("logIn_button").style.backgroundColor = "rgb(178, 221, 239)";
    }
}

// 이메일 검증 스크립트 작성
function verifyEmail() {
    var emailVal = document.getElementById("ID").value;
  
    var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    // 검증에 사용할 정규식 변수 regExp에 저장
  
    if( emailVal.match(regExp) == null){
        document.getElementById("ID").style.backgroundImage = "url('../image/HW1_image/error.png')";
    } else{
        document.getElementById("ID").style.backgroundImage = "";
    }    
};