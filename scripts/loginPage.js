let errr;

class User {
  constructor() {}

  validateUserName(username) {
    return username.includes("@") ? false : true;
  }

  validatePassword(password) {
    return password.length < 8 ? false : true;
  }

  async Login(u, p) {
    console.log("hii");
    const login_data = {
      username: u,
      password: p,
    };

    const login_api = `https://masai-api-mocker.herokuapp.com/auth/login`;

    const response = await fetch(login_api, {
      method: "POST",
      body: JSON.stringify(login_data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await response.json();
    errr = data.error;
    console.log("error:", errr);
    if(errr==true){
        let incorrect = document.getElementById('incorrect');
        incorrect.style.display='block';
        incorrect.style.color='red';
    }else{
        redirectToSignUp();
    }
  }
}
let user = new User();
const login = () => {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  user.Login(username, password);
};



var myInput = document.getElementById("login-password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
let clength = document.getElementById('length')
var char = document.getElementById("char");

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
};

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
};

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (myInput.value.length >= 8) {
    clength.classList.remove("invalid");
    clength.classList.add("valid");
  } else {
    clength.classList.remove("valid");
    clength.classList.add("invalid");
  }

//   let charcter = () => {
//     var charcters = ["@", "#", "*", "&"];
//     let value = myInput.value;
//     let ans = false;
//     for(let i=0 ; i<charcters.length ; i++){
//         if(charcters[i]===value){
//             ans=true;
//         }
//     }
//     return ans;
//   };
  var charcter = /[!@#$%^&*]/g;

  if (myInput.value.match(charcter)) {
    char.classList.remove("invalid");
    char.classList.add("valid");
  } else {
    char.classList.remove("valid");
    char.classList.add("invalid");
  }
};
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
