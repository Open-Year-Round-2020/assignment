function checkEmail(str) {                                                 
     let reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
     if(!reg_email.test(str)) {                            
          return false;         
     } else {                       
          return true;         
     }                            
}                                

function checking() {                                          
     let emailinfo = document.getElementById("inputid");
     let pwinfo = document.getElementById("inputpw");

    if(!checkEmail(emailinfo.value)) {
        document.getElementById("input_img").style.display="block";
        alert ( '올바르지 않은 이메일입니다' );
    } else {  
          if ( emailinfo.value != 'helloworld@gmail.com' ) {
               alert ( '가입되지 않은 아이디입니다' );
          } else {
               if ( pwinfo.value != 'asdf0123' ) {
                    alert ( '비밀번호를 확인해주세요' );
               } else {
                    document.getElementById("input_img").style.display="none";
                    alert ( '로그인 되었습니다.\n \n휴대폰 및 이메일:' +  emailinfo.value );
                    
               }
          }
     } 
} 