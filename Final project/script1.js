
 window.onload=pageload;

function pageload(){
    var form = document.getElementById("form");
    form.onsubmit=validation;
}

 function validation(){

var valid =true;
var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");
var span3 = document.getElementById("span3");
var span4 = document.getElementById("span4");
var span5 = document.getElementById("span5");
var span6 = document.getElementById("span6");

var re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var rep=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8}");
var repa=/^(?=.*\s)/;
var firstname = document.getElementById("firstname").value;
var lastname = document.getElementById("lastname").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var password = document.getElementById("password").value;
var address = document.getElementById("address").value;




if(firstname==""){   span1.innerHTML="firstname : *[required]*";
span1.style.color="red";
valid=false; }
else if(!isNaN(firstname)){
  valid=false;
  span1.innerHTML="firstname : *[ must be a text]*";
  span1.style.color="red";
} 
else{span1.innerHTML="firstname";
span1.style.color="black";

}



if(lastname==""){   span2.innerHTML="lastname : *[required]*";
span2.style.color="red";
valid=false; }
else if(!isNaN(lastname)){
  valid=false;
  span2.innerHTML="lastname : *[ must be a text]*";
  span2.style.color="red";
}else{span2.innerHTML="lastname";
span2.style.color="black";

}



if(phone==""){   span6.innerHTML="phone : *[required]*";
span6.style.color="red";
valid=false; }
else if(phone.length!=11){
     valid=false;
     span6.innerHTML="phone number : *[ must be a valid EG phonenumber(11 digits)]*";
     span6.style.color="red";
   }else{span6.innerHTML="phone number";
   span6.style.color="black";

   }


   if(password==""){   span4.innerHTML="password : *[required]*";
   span4.style.color="red";
   valid=false; }
   else if(!rep.test(password) || password.length !=8 || repa.test(password) || password[0]==password[0].toLowerCase()) {
    valid=false;
    span4.innerHTML="password : *[ password must start with uppercase character and must include 8 characters including one digit at least and one special character like -, _, #,&, and *and No white spaces allowed in the password.";
    span4.style.color="red";
  }else{span4.innerHTML="password";
  span4.style.color="black";

  }



  if(email==""){   span3.innerHTML="email : *[required]*";
  span3.style.color="red";
  valid=false; }
  else if(!re.test(email) ){
    valid=false;
    span3.innerHTML="email : *[ incorrect email]*";
    span3.style.color="red";
  }else{span3.innerHTML="password";
  span3.style.color="black";

  }


  if(address==""){
    valid=false;
    span5.innerHTML="address : *[ required]*";
    span5.style.color="red";
  }else{span5.innerHTML="address";
  span5.style.color="black";}



  if(valid==true){
    alert("thanks "+firstname+" "+lastname+" for join us");
    window.location.href="index.html";
  }

   return valid;
 }

