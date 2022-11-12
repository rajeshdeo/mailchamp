let errr;
let notMatch = document.querySelector(".not-matched");
let match = document.querySelector(".match");
let status = false;

const login = () => {
  console.log("hii");
  let username = document.getElementById("login-username").value;
  let password = document.getElementById("login-password").value;
  let userDataArr = JSON.parse(localStorage.getItem("user"));

  let n = userDataArr.length;
  console.log(n);
  for (let i = 0; i < n; i++) {
    if (
      username === userDataArr[i].username &&
      password === userDataArr[i].password
    ) {
      status = true;
      redirectToHomePage();
    }
  }
  console.log(status);
};

function redirectToHomePage(){
  // window.location.replace('')
  console.log('redire to home page')
}

function searchUserName() {
  let username = document.getElementById("login-username").value;
  let userDataArr = JSON.parse(localStorage.getItem("user"));

  let n = userDataArr.length;
  console.log(n);
  let status = false;
  for (let i = 0; i < n; i++) {
    if (username === userDataArr[i].username) {
      status = true;
    }
  }

  if (status === true) {
    match.style.display = "block";
    notMatch.style.display = "none";
  } else {
    notMatch.style.display = "block";
    match.style.display = "none";
  }
  console.log(status);
}

var myInput = document.getElementById("login-password");

function myFunction() {
  var x = document.getElementById("login-password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function mouseOver() {
  let hover_ = document.querySelector(".hover");
  hover_.style.color = "black";
}
function mouseOut() {
  let hover_ = document.querySelector(".hover");
  hover_.style.color = "#4296cb";
}
function redirectToSignUp() {
  // window.location.replace('signUpPage.html');
  console.log("redirect to sign up page");
}
let id;

function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
}

window.addEventListener("load", function () {
  let loginbtn = document.getElementById("login");
  loginbtn.onclick = () => {
    login();
    match.style.display = "none";
    notMatch.style.display = "none";
  };
  let eye = document.getElementById("eye");
  eye.onclick = () => {
    myFunction();
  };
  let blue_hover = document.querySelector(".hover");
  blue_hover.onmouseover = () => {
    mouseOver();
  };
  blue_hover.onmouseout = () => {
    mouseOut();
  };
  blue_hover.onclick = () => {
    redirectToSignUp();
  };
  let loginUser = document.getElementById("login-username");
  loginUser.oninput = () => {
    debounce(searchUserName, 1000);
  };
});
