function checkEmail(str) {                                                 
     var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
     if(!reg_email.test(str)) {                            
          return false;         
     }                            
     else {                       
          return true;         
     }                            
}                                

function checking() {                                          
	var emailinfo = document.getElementById("inputid");
    if(!checkEmail(emailinfo.value)) {
        document.getElementById("input_img").style.display="block";
    }                       
	else {          
        document.getElementById("input_img").style.display="none";
        alert ( '로그인 되었습니다.\n \n휴대폰 및 이메일:' +  emailinfo.value );
        location.href="feed.html";
	}                      
}         
