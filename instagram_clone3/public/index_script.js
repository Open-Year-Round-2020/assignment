window.onload = function(){
    document.getElementById('login_button').addEventListener('click',check);
}

function movePage1(){
    window.open('page1.html');
}


function check(){
    var userid = document.getElementById('userId').value;
    var userpw = document.getElementById('userPassword').value;

    let regexp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;


    if(userid.length>0&&(userid.length<=6||!regexp.test(userid))){

        alert('이메일 형식에 맞게 입력하시오')
        return false;
    }


    if(userid==''&& userpw==''){
        alert('아이디와 비밀번호를 입력하세요');
    }

    /*else if(userid=='instagram@gmail.com' && userpw=='1234'){
        movePage1();
    }
    else{
        alert('아이디 혹은 비밀번호가 잘못되었습니다')
    }*/

}

