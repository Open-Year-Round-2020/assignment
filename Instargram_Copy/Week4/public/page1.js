//이미지 랜덤 출력 함수
random();
function random()
{
    let array = new Array("images/ani1.jpg","images/ani2.jpg","images/ani3.jpg","images/ani4.jpg","images/ani5.jpg");
    var TEMP = document.querySelector(".ani"); 
    var num = Math.floor(Math.random() * 5);
    TEMP.src=array[num];
    setTimeout("random()",3000);
}

//로그인 버튼 ON/OFF
var ID = document.querySelector(".login_ID");
var PW = document.querySelector(".login_PW");
var button_light1 = document.querySelector(".login_button");
var button_light2 = document.querySelector(".login_button2");

ID.onchange = on_off;
PW.onchange = on_off;
function on_off()
{
    if(ID.value.length>0 && PW.value.length>5)
    {
    button_light1.classList.remove("opa1");
    button_light2.classList.remove("opa2");
    }
    else
    {
    button_light1.classList.add("opa1");
    button_light2.classList.add("opa2");
    }
}

//로그인 정보 확인 함수
var temp1 = document.querySelector(".err1");
var temp2 = document.querySelector(".err2");
var temp3 = document.querySelector(".accept_login");

button_light1.onclick=login;
button_light2.onclick=login;

function login()
{
    let regexp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    var myID = "dlwogns1205@naver.com";
    var myPW = "ABCDEF";

    if(ID.value.length <=6 || !regexp.test(ID.value))
    {
        temp2.classList.add('display_none');
        temp1.classList.remove('display_none');
        return false;
    }

    if(ID.value==myID && PW.value == myPW)
    {
        temp1.classList.add('display_none');
        temp2.classList.add('display_none');
        temp3.classList.remove('display_none');
        setTimeout(function()
        {
            location.href="week2.html";
        }, 1500);
        
        
       
    }
    else{
        temp1.classList.add('display_none');
        temp2.classList.remove('display_none');
    }
}