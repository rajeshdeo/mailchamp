//https://masai-api-mocker.herokuapp.com/auth/register

class User {
  constructor() {}

  validateUserName(username) {
    return username.includes("@") ? false : true;
  }

  validatePassword(password) {
    return password.length < 8 ? false : true;
  }
  validateAll(n, e, u, p, m, d){
    console.log(n, e, u, p, m, d)
    let N=n.trim();
    let E=e.trim()
    let U=u.trim()
    let P=p.trim()
    let M=m.trim()
    let D=d.trim()
    console.log(N,E,U,P,M,D);
    if(N!=''&&E!=''&&U!=''&&P!=''&&M!=''&&D!=''){
      return true;
    }
    return false;
  }

   signUp(n, e, u, p, m, d) {
    let isValidated = this.validateUserName(u) && this.validatePassword(p)&&this.validateAll(n, e, u, p, m, d);

    if (isValidated) {
      this.name = n;
      this.email = e;
      this.username = u;
      this.password = p;
      this.mobile = m;
      this.description = d;
     
      let uesrData = {
        name:n,
        email:e,
        username:u,
        password:p,
        mobile:m,
        description:d,
      }

      let userDataArr = JSON.parse(localStorage.getItem("user")) || [];
      userDataArr.push(uesrData);
      localStorage.setItem('user',JSON.stringify(userDataArr));
      console.log(userDataArr)
    }else{
      console.log('empty spaces not allowed')
    }
  }
}

let user = new User();

let Register = () => {
  let regForm = document.getElementById("reg_form");

  const name = regForm.name.value;
  const email = regForm.email.value;
  console.log('email:', email)
  const username = regForm.username.value;
  const password = regForm.password.value;
  const mobile = regForm.mobile.value;
  const description = regForm.description.value;

  user.signUp(name, email, username, password, mobile, description);
  console.log("user:", user);
  // console.log(name,email,username,password,mobile,description)
};

var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
let clength = document.getElementById("length");
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

  var charcter = /[!@#$%^&*]/g;

  if (myInput.value.match(charcter)) {
    char.classList.remove("invalid");
    char.classList.add("valid");
  } else {
    char.classList.remove("valid");
    char.classList.add("invalid");
  }
};

function redirectToLoginPage(){
  // window.location.replace('signUpPage.html');
  console.log("redirect to sign up page");
}

function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function mouseOver() {
  let hover_ = document.getElementById("login");
  hover_.style.color = "#fff";
}
function mouseOut() {
  let hover_ = document.getElementById("login");
  hover_.style.color = "#db4a3c";
}

window.addEventListener("load", function () {
  let register = document.getElementById("register");
  register.onclick = () => {
    Register();
  };
  let login_btn = document.getElementById('login')
  login_btn.onclick=()=>{
    redirectToLoginPage()
  }
  login_btn.onmouseover = () => {
    mouseOver();
  };
  login_btn.onmouseout = () => {
    mouseOut();
  };
  let eye = document.getElementById("eye");
  eye.onclick = () => {
    myFunction();
  };
});
