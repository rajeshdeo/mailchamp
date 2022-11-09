//https://masai-api-mocker.herokuapp.com/auth/register

class User {
    constructor() {}
  
    validateUserName(username) {
      return username.includes("@") ? false : true;
    }
  
    validatePassword(password) {
      return password.length < 8 ? false : true;
    }
  
    async signUp(n, e, u, p, m, d) {
      let isValidated = this.validateUserName(u) && this.validatePassword(p);
  
      if (isValidated) {
        this.name = n;
        this.email = e;
        this.username = u;
        this.password = p;
        this.mobile = m;
        this.description = d;
  
        let register_api = "https://masai-api-mocker.herokuapp.com/auth/register";
  
        let response = await fetch(register_api, {
          method: "POST",
          body: JSON.stringify(this),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        const data = await response.json();
        console.log("data:", data);
      }
    }
  }
  
  let user = new User();
  
  let Register = () => {
    let regForm = document.getElementById("reg_form");
  
    const name = regForm.name.value;
    const email = regForm.email.value;
    const username = regForm.username.value;
    const password = regForm.password.value;
    const mobile = regForm.mobile.value;
    const description = regForm.description.value;
  
    user.signUp(name, email, username, password, mobile, description);
    console.log("user:", user);
    // console.log(name,email,username,password,mobile,description)
  };
  
console.log('hii')  


window.addEventListener('load',function(){
    let register = document.getElementById('register')
    register.onclick=()=>{
        Register();
    }
});