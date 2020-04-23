var Email={
    checkEmail:function(self){
        var email=document.getElementById('eValidation').value;
        var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if(regExp.test(email)){
          return true;
        }else if(email===""){
          alert("이메일을 입력해주세요!");
          return false;
        }
        else {
          alert("이메일 형식을 제대로 입력해주세요!");
          return false;
      }
    }
}

var Password={
    checkPassword:function(self){
      var fpassword=document.getElementById('fValidation').value;
      var spassword= document.getElementById('sValidation').value;
      if(fpassword==="" || spassword===""){
        alert("비밀번호를 입력해주세요!");
        return false;
      }else if(fpassword===spassword){
        return true;
      }else{
        alert("입력하신 비밀번호들이 다릅니다!");
        return false;
      }
    }
}

function checkValidation(self){
    if(Email.checkEmail() && Password.checkPassword() ){
      return true;
    }else return false;

}
