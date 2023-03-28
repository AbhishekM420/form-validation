
    const email = document.getElementById("email");
const emailerr = document.getElementById("emailerr");
email.addEventListener("input", (event) =>{
    if(!email.checkValidity()){
    emailerr.innerHTML = email.validationMessage;
    document.getElementById("sbbtn").disabled = true;}
    else
    {emailerr.innerHTML = "Input OK";
    document.getElementById("sbbtn").disabled = false;
    checkEmpty();
}
})

const zipcode = document.getElementById("zipcode");
const ziperr = document.getElementById("ziperr");
zipcode.addEventListener("input", (event)=>{
    if(!zipcode.checkValidity())
    {ziperr.innerHTML = zipcode.validationMessage;
    document.getElementById("sbbtn").disabled = true;}
    else
   { ziperr.innerHTML= "Input OK"
    document.getElementById("sbbtn").disabled = false;
    checkEmpty();
}
})

const password = document.getElementById("password");
const pwderr = document.getElementById("pwderr");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
document.getElementById("pwdver").style.display = "none";

// When the user clicks on the password field, show the message box
password.onfocus = function() {
    document.getElementById("pwdver").style.display = "block";
    
  }
  
  // When the user clicks outside of the password field, hide the message box
 password.onblur = function() {
    document.getElementById("pwdver").style.display = "none";
  }


password.addEventListener("input",(event)=>{
    var lowerCase = /[a-z]/g;                //validate lowercase letters
    if(password.value.match(lowerCase)){
        letter.classList.remove("invalid");
        letter.classList.add("valid");
                                              //changing classlist so that styling can be applied
    }
    else{
        letter.classList.remove("valid");
        letter.classList.add("invalid");
        document.getElementById("sbbtn").disabled = true;
    }

    var upperCase = /[A-Z]/g;
    if(password.value.match(upperCase)){
        capital.classList.remove("invalid");
    capital.classList.add("valid");
    

    }
    else{
        capital.classList.remove("valid");
    capital.classList.add("invalid");
    document.getElementById("sbbtn").disabled = true;
    }
    var numbers = /[0-9]/g;
    if(password.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
      document.getElementById("sbbtn").disabled = true;
    }
    if(password.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
        document.getElementById("sbbtn").disabled = true;
      }

})
const submit = document.getElementById("sbbtn");
submit.addEventListener("click",passwordVerification)
function passwordVerification(){
   var pw1 = document.getElementById("password").value;
   var pw2 = document.getElementById("cfmpassword").value;
  const cpwerr = document.getElementById("cpwderr")
   if(pw1 == pw2 && pw1!= "")
   {cpwerr.innerHTML = "You are good to Go!";
   document.getElementById("dataForm").reset();
  document.getElementById("sbbtn").disabled = false;
   checkEmpty();
   clearerr();
  }
   
   else
   {
    
    cpwerr.innerHTML = "Passwords Do Not Match";
    document.getElementById("dataForm").reset();
    clearerr();
    changeValidity();
   document.getElementById("sbbtn").disabled = true;
   }

}
function checkEmpty(){
    if(document.getElementById("password").value =="" || document.getElementById("cfmpassword").value == ""||  document.getElementById("email").value == "" ||document.getElementById("zipcode").value ==""||document.getElementById("country").value ==""){
        document.getElementById("sbbtn").disabled = true;  
    }
    else
    document.getElementById("sbbtn").disabled = false;
}
email.onblur = function() {
  
  document.getElementById("emailerr").style.display = "none";}
email.onfocus = function() {document.getElementById("emailerr").style.display = "block";}
zipcode.onfocus = function() {document.getElementById("ziperr").style.display = "block";}
zipcode.onblur = function() {document.getElementById("ziperr").style.display = "none";}

function clearerr(){
  document.getElementById("emailerr").innerHTML = "";
  document.getElementById("ziperr").innerHTML = "";
  document.getElementById("pwderr").innerHTML = "";


}
document.getElementById("cfmpassword").addEventListener("input",(event)=>{
  checkEmpty();
})

function changeValidity(){
  letter.classList.remove("valid");
  letter.classList.add("invalid");
  number.classList.remove("valid");
  number.classList.add("invalid");
  capital.classList.remove("valid");
  capital.classList.add("invalid");
  length.classList.remove("valid");
  length.classList.add("invalid");
}
document.getElementById("cpwderr").innerHTML = "";

