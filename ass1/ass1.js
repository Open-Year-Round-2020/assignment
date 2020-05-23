function page_href() {

    location.href = "../ass2/ass2.html";

}

// document.getElementById("logIn_button").onclick = function () {
//     page_href();
// }

var userInfo = [{
        id: "juhwan",
        password: "111111"
    },
    {
        id: "kim",
        password: "222222"
    }
]

function log_in() {
    var ID = document.getElementById("ID").value;
    var PASSWORD = document.getElementById("PASSWORD").value;
    for (i = 0; i < userInfo.length; i++) {
        if (ID === userInfo[i].id && PASSWORD === userInfo[i].password) {
            alert("로그인 되었습니다.\n\nid : " + ID + "\npassword : " + PASSWORD);
            page_href();
            return;
        } else if (ID !== userInfo[i].id && PASSWORD !== userInfo[i].password){
            document.getElementById("ID").style.backgroundImage = "url('./image/error.png')";
            document.getElementById("PASSWORD").style.backgroundImage = "url('./image/error.png')";
        }else if (ID === userInfo[i].id && PASSWORD !== userInfo[i].password){
            document.getElementById("ID").style.backgroundImage = "url('')";
            document.getElementById("PASSWORD").style.backgroundImage = "url('./image/error.png')";
            break;
        }else if (ID !== userInfo[i].id && PASSWORD === userInfo[i].password){
            document.getElementById("ID").style.backgroundImage = "url('./image/error.png')";
            document.getElementById("PASSWORD").style.backgroundImage = "url('')";
            break;
        }
    }
}

function color_change() {
    var numId = document.getElementById("ID").value.length;
    var numPass = document.getElementById("PASSWORD").value.length;

    if (numId >= 1 && numPass >= 6) {
        document.getElementById("logIn_button").style.backgroundColor = "#0095f6";
    } else {
        document.getElementById("logIn_button").style.backgroundColor = "rgb(178, 221, 239)";
    }
}