let errr;


const login = () => {
  console.log('hii')
  let username = document.getElementById("login-username").value;
  let password = document.getElementById("login-password").value;
  let userDataArr = JSON.parse(localStorage.getItem("user"))
 

  let n = userDataArr.length;
  console.log(n)
  let status = false;
  for(let i=0 ; i<n ; i++){
    if(username===userDataArr[i].username&&password===userDataArr[i].password){
      status=true;
    }
  }
  console.log(status)
  

};



var myInput = document.getElementById("login-password");



function myFunction() {
  var x = document.getElementById("login-password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function mouseOver (){
    let hover_ = document.querySelector('.hover')
    hover_.style.color='black';
}
function mouseOut(){
    let hover_ = document.querySelector('.hover')
    hover_.style.color='#4296cb';
}
function redirectToSignUp(){
    // window.location.replace('signUpPage.html');
    console.log("redirect to sign up page");
}

window.addEventListener("load", function () {
  let loginbtn = document.getElementById("login");
  loginbtn.onclick = () => {
    login();
  };
  let eye = document.getElementById('eye');
  eye.onclick=()=>{
    myFunction() 
  };
  let blue_hover = document.querySelector('.hover')
  blue_hover.onmouseover=()=>{
    mouseOver();
  };
  blue_hover.onmouseout=()=>{
    mouseOut();
  }
  blue_hover.onclick=()=>{
    redirectToSignUp()
  }
              
});
