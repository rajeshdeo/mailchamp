import { navbar } from "../components/navbar.js"
import { footer } from "../components/footer.js"

let nav_div = document.getElementById("navbar");
nav_div.innerHTML = navbar();

let footer_div = document.querySelector(".footer");
footer_div.innerHTML = footer();

let btn1 = document.querySelector(".btn1");
btn1.onclick = () => {
    window.location.href = "../loginPage.html"
}

let btn2 = document.querySelector(".btn2");
btn2.onclick = () => {
    // console.log("check");
    window.location.href = "../signUpPage.html"
} 