import {navbar} from "./components/navbar.js"
import { footer } from "./components/footer.js"

let nav_div = document.getElementById("navbar");
nav_div.innerHTML = navbar();

let footer_div = document.querySelector(".footer");
footer_div.innerHTML = footer();



let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");

let p2_div = document.getElementById("p2_div");
let p2_month = document.getElementById("p2_month");
let p2_text = document.getElementById("p2_text");

let p3_div = document.getElementById("p3_div");
let p3_month = document.getElementById("p3_month");
let p3_text = document.getElementById("p3_text");

let p4_div = document.getElementById("p4_div");
let p4_month = document.getElementById("p4_month");
let p4_text = document.getElementById("p4_text");

let p1_button = document.getElementById("p1_button");
let p2_button = document.getElementById("p2_button");
let p3_button = document.getElementById("p3_button");
let p4_button = document.getElementById("p4_button");

// Contacts Functionality
let contacts = document.getElementById("contacts");
contacts.onchange = () => {

    let x = contacts.value;

    if (x > 500) {
        p4_div.style.display = "none";
        p4_month.style.display = "none";
        p4_text.innerText = "You've selected more contacts than this plan allows"
        p4_button.innerText = "Contact limit exceeded";
        p4_button.style.backgroundColor = "#dbd9d2";
        p4_button.style.border = "none";
        p4_button.style.color = "#776d5e";
        p4_button.style.padding = "10px 22px";
        p4_button.style.fontWeight = "400";
    }

    if (x == 500) {
        p1.innerText = "23,000";
        p2.innerText = "1,150";
        p3.innerText = "770";

        p1_div.style.display = "flex";
        p1_month.style.display = "flex";
        p1_text.innerText = "Starts at"
        p1_button.innerText = "Buy Now";
        p1_button.style.backgroundColor = "#ffe01b";
        p1_button.style.border = "0.85px solid black";
        p1_button.style.color = "#241c15";
        p1_button.style.padding = "10px 50px";
        p1_button.style.fontWeight = "600";

        p2_div.style.display = "flex";
        p2_month.style.display = "flex";
        p2_text.innerText = "Starts at"
        p2_button.innerText = "Buy Now";
        p2_button.style.backgroundColor = "#ffe01b";
        p2_button.style.border = "0.85px solid black";
        p2_button.style.color = "#241c15";
        p2_button.style.padding = "10px 50px";
        p2_button.style.fontWeight = "600";

        p3_div.style.display = "flex";
        p3_month.style.display = "flex";
        p3_text.innerText = "Starts at"
        p3_button.innerText = "Buy Now";
        p3_button.style.backgroundColor = "#ffe01b";
        p3_button.style.border = "0.85px solid black";
        p3_button.style.color = "#241c15";
        p3_button.style.padding = "10px 50px";
        p3_button.style.fontWeight = "600";

    } else if (x == 1500) {
        p1.innerText = "23,000";
        p2.innerText = "3,850";
        p3.innerText = "1,500"

        p1_div.style.display = "flex";
        p1_month.style.display = "flex";
        p1_text.innerText = "Starts at"
        p1_button.innerText = "Buy Now";
        p1_button.style.backgroundColor = "#ffe01b";
        p1_button.style.border = "0.85px solid black";
        p1_button.style.color = "#241c15";
        p1_button.style.padding = "10px 50px";
        p1_button.style.fontWeight = "600";

        p2_div.style.display = "flex";
        p2_month.style.display = "flex";
        p2_text.innerText = "Starts at"
        p2_button.innerText = "Buy Now";
        p2_button.style.backgroundColor = "#ffe01b";
        p2_button.style.border = "0.85px solid black";
        p2_button.style.color = "#241c15";
        p2_button.style.padding = "10px 50px";
        p2_button.style.fontWeight = "600";

        p3_div.style.display = "flex";
        p3_month.style.display = "flex";
        p3_text.innerText = "Starts at"
        p3_button.innerText = "Buy Now";
        p3_button.style.backgroundColor = "#ffe01b";
        p3_button.style.border = "0.85px solid black";
        p3_button.style.color = "#241c15";
        p3_button.style.padding = "10px 50px";
        p3_button.style.fontWeight = "600";

    } else if (x == 2500) {
        p1.innerText = "23,000";
        p2.innerText = "3,850";
        p3.innerText = "2,300"

        p1_div.style.display = "flex";
        p1_month.style.display = "flex";
        p1_text.innerText = "Starts at"
        p1_button.innerText = "Buy Now";
        p1_button.style.backgroundColor = "#ffe01b";
        p1_button.style.border = "0.85px solid black";
        p1_button.style.color = "#241c15";
        p1_button.style.padding = "10px 50px";
        p1_button.style.fontWeight = "600";

        p2_div.style.display = "flex";
        p2_month.style.display = "flex";
        p2_text.innerText = "Starts at"
        p2_button.innerText = "Buy Now";
        p2_button.style.backgroundColor = "#ffe01b";
        p2_button.style.border = "0.85px solid black";
        p2_button.style.color = "#241c15";
        p2_button.style.padding = "10px 50px";
        p2_button.style.fontWeight = "600";

        p3_div.style.display = "flex";
        p3_month.style.display = "flex";
        p3_text.innerText = "Starts at"
        p3_button.innerText = "Buy Now";
        p3_button.style.backgroundColor = "#ffe01b";
        p3_button.style.border = "0.85px solid black";
        p3_button.style.color = "#241c15";
        p3_button.style.padding = "10px 50px";
        p3_button.style.fontWeight = "600";

    } else if (x == 5000) {
        p1.innerText = "23,000";
        p2.innerText = "5,800";
        p3.innerText = "3,850";

        p1_div.style.display = "flex";
        p1_month.style.display = "flex";
        p1_text.innerText = "Starts at"
        p1_button.innerText = "Buy Now";
        p1_button.style.backgroundColor = "#ffe01b";
        p1_button.style.border = "0.85px solid black";
        p1_button.style.color = "#241c15";
        p1_button.style.padding = "10px 50px";
        p1_button.style.fontWeight = "600";

        p2_div.style.display = "flex";
        p2_month.style.display = "flex";
        p2_text.innerText = "Starts at"
        p2_button.innerText = "Buy Now";
        p2_button.style.backgroundColor = "#ffe01b";
        p2_button.style.border = "0.85px solid black";
        p2_button.style.color = "#241c15";
        p2_button.style.padding = "10px 50px";
        p2_button.style.fontWeight = "600";

        p3_div.style.display = "flex";
        p3_month.style.display = "flex";
        p3_text.innerText = "Starts at"
        p3_button.innerText = "Buy Now";
        p3_button.style.backgroundColor = "#ffe01b";
        p3_button.style.border = "0.85px solid black";
        p3_button.style.color = "#241c15";
        p3_button.style.padding = "10px 50px";
        p3_button.style.fontWeight = "600";

    } else if (x == 10000) {
        p1.innerText = "23,000";
        p2.innerText = "7,600";
        p3.innerText = "5,800";

        p1_div.style.display = "flex";
        p1_month.style.display = "flex";
        p1_text.innerText = "Starts at"
        p1_button.innerText = "Buy Now";
        p1_button.style.backgroundColor = "#ffe01b";
        p1_button.style.border = "0.85px solid black";
        p1_button.style.color = "#241c15";
        p1_button.style.padding = "10px 50px";
        p1_button.style.fontWeight = "600";

        p2_div.style.display = "flex";
        p2_month.style.display = "flex";
        p2_text.innerText = "Starts at"
        p2_button.innerText = "Buy Now";
        p2_button.style.backgroundColor = "#ffe01b";
        p2_button.style.border = "0.85px solid black";
        p2_button.style.color = "#241c15";
        p2_button.style.padding = "10px 50px";
        p2_button.style.fontWeight = "600";

        p3_div.style.display = "flex";
        p3_month.style.display = "flex";
        p3_text.innerText = "Starts at"
        p3_button.innerText = "Buy Now";
        p3_button.style.backgroundColor = "#ffe01b";
        p3_button.style.border = "0.85px solid black";
        p3_button.style.color = "#241c15";
        p3_button.style.padding = "10px 50px";
        p3_button.style.fontWeight = "600";

    } else if (x == 15000) {
        p1.innerText = "27,000";
        p2.innerText = "12,200";
        p3.innerText = "9,900";

        p1_div.style.display = "flex";
        p1_month.style.display = "flex";
        p1_text.innerText = "Starts at"
        p1_button.innerText = "Buy Now";
        p1_button.style.backgroundColor = "#ffe01b";
        p1_button.style.border = "0.85px solid black";
        p1_button.style.color = "#241c15";
        p1_button.style.padding = "10px 50px";
        p1_button.style.fontWeight = "600";

        p2_div.style.display = "flex";
        p2_month.style.display = "flex";
        p2_text.innerText = "Starts at"
        p2_button.innerText = "Buy Now";
        p2_button.style.backgroundColor = "#ffe01b";
        p2_button.style.border = "0.85px solid black";
        p2_button.style.color = "#241c15";
        p2_button.style.padding = "10px 50px";
        p2_button.style.fontWeight = "600";

        p3_div.style.display = "flex";
        p3_month.style.display = "flex";
        p3_text.innerText = "Starts at"
        p3_button.innerText = "Buy Now";
        p3_button.style.backgroundColor = "#ffe01b";
        p3_button.style.border = "0.85px solid black";
        p3_button.style.color = "#241c15";
        p3_button.style.padding = "10px 50px";
        p3_button.style.fontWeight = "600";

    } else if (x == 20000) {
        p1.innerText = "31,000";
        p2.innerText = "14,500";
        p3.innerText = "12,200";

        p1_div.style.display = "flex";
        p1_month.style.display = "flex";
        p1_text.innerText = "Starts at"
        p1_button.innerText = "Buy Now";
        p1_button.style.backgroundColor = "#ffe01b";
        p1_button.style.border = "0.85px solid black";
        p1_button.style.color = "#241c15";
        p1_button.style.padding = "10px 50px";
        p1_button.style.fontWeight = "600";

        p2_div.style.display = "flex";
        p2_month.style.display = "flex";
        p2_text.innerText = "Starts at"
        p2_button.innerText = "Buy Now";
        p2_button.style.backgroundColor = "#ffe01b";
        p2_button.style.border = "0.85px solid black";
        p2_button.style.color = "#241c15";
        p2_button.style.padding = "10px 50px";
        p2_button.style.fontWeight = "600";

        p3_div.style.display = "flex";
        p3_month.style.display = "flex";
        p3_text.innerText = "Starts at"
        p3_button.innerText = "Buy Now";
        p3_button.style.backgroundColor = "#ffe01b";
        p3_button.style.border = "0.85px solid black";
        p3_button.style.color = "#241c15";
        p3_button.style.padding = "10px 50px";
        p3_button.style.fontWeight = "600";

    } else if (x == 25000) {
        p1.innerText = "34,500";
        p2.innerText = "17,000";
        p3.innerText = "14,500";

        p1_div.style.display = "flex";
        p1_month.style.display = "flex";
        p1_text.innerText = "Starts at"
        p1_button.innerText = "Buy Now";
        p1_button.style.backgroundColor = "#ffe01b";
        p1_button.style.border = "0.85px solid black";
        p1_button.style.color = "#241c15";
        p1_button.style.padding = "10px 50px";
        p1_button.style.fontWeight = "600";

        p2_div.style.display = "flex";
        p2_month.style.display = "flex";
        p2_text.innerText = "Starts at"
        p2_button.innerText = "Buy Now";
        p2_button.style.backgroundColor = "#ffe01b";
        p2_button.style.border = "0.85px solid black";
        p2_button.style.color = "#241c15";
        p2_button.style.padding = "10px 50px";
        p2_button.style.fontWeight = "600";

        p3_div.style.display = "flex";
        p3_month.style.display = "flex";
        p3_text.innerText = "Starts at"
        p3_button.innerText = "Buy Now";
        p3_button.style.backgroundColor = "#ffe01b";
        p3_button.style.border = "0.85px solid black";
        p3_button.style.color = "#241c15";
        p3_button.style.padding = "10px 50px";
        p3_button.style.fontWeight = "600";

    } else if (x == 30000) {
        p1.innerText = "38,500";
        p2.innerText = "19,500";
        p3.innerText = "17,000";

        p1_div.style.display = "flex";
        p1_month.style.display = "flex";
        p1_text.innerText = "Starts at"
        p1_button.innerText = "Buy Now";
        p1_button.style.backgroundColor = "#ffe01b";
        p1_button.style.border = "0.85px solid black";
        p1_button.style.color = "#241c15";
        p1_button.style.padding = "10px 50px";
        p1_button.style.fontWeight = "600";

        p2_div.style.display = "flex";
        p2_month.style.display = "flex";
        p2_text.innerText = "Starts at"
        p2_button.innerText = "Buy Now";
        p2_button.style.backgroundColor = "#ffe01b";
        p2_button.style.border = "0.85px solid black";
        p2_button.style.color = "#241c15";
        p2_button.style.padding = "10px 50px";
        p2_button.style.fontWeight = "600";

        p3_div.style.display = "flex";
        p3_month.style.display = "flex";
        p3_text.innerText = "Starts at"
        p3_button.innerText = "Buy Now";
        p3_button.style.backgroundColor = "#ffe01b";
        p3_button.style.border = "0.85px solid black";
        p3_button.style.color = "#241c15";
        p3_button.style.padding = "10px 50px";
        p3_button.style.fontWeight = "600";

    } else if (x == 40000) {
        p1.innerText = "42,500";
        p2.innerText = "21,000";
        p3.innerText = "19,500";

        p1_div.style.display = "flex";
        p1_month.style.display = "flex";
        p1_text.innerText = "Starts at"
        p1_button.innerText = "Buy Now";
        p1_button.style.backgroundColor = "#ffe01b";
        p1_button.style.border = "0.85px solid black";
        p1_button.style.color = "#241c15";
        p1_button.style.padding = "10px 50px";
        p1_button.style.fontWeight = "600";

        p2_div.style.display = "flex";
        p2_month.style.display = "flex";
        p2_text.innerText = "Starts at"
        p2_button.innerText = "Buy Now";
        p2_button.style.backgroundColor = "#ffe01b";
        p2_button.style.border = "0.85px solid black";
        p2_button.style.color = "#241c15";
        p2_button.style.padding = "10px 50px";
        p2_button.style.fontWeight = "600";

        p3_div.style.display = "flex";
        p3_month.style.display = "flex";
        p3_text.innerText = "Starts at"
        p3_button.innerText = "Buy Now";
        p3_button.style.backgroundColor = "#ffe01b";
        p3_button.style.border = "0.85px solid black";
        p3_button.style.color = "#241c15";
        p3_button.style.padding = "10px 50px";
        p3_button.style.fontWeight = "600";

    } else if (x == 50000) {
        p1.innerText = "46,000";
        p2.innerText = "23,000";
        p3.innerText = "20,000";

        p1_div.style.display = "flex";
        p1_month.style.display = "flex";
        p1_text.innerText = "Starts at"
        p1_button.innerText = "Buy Now";
        p1_button.style.backgroundColor = "#ffe01b";
        p1_button.style.border = "0.85px solid black";
        p1_button.style.color = "#241c15";
        p1_button.style.padding = "10px 50px";
        p1_button.style.fontWeight = "600";

        p2_div.style.display = "flex";
        p2_month.style.display = "flex";
        p2_text.innerText = "Starts at"
        p2_button.innerText = "Buy Now";
        p2_button.style.backgroundColor = "#ffe01b";
        p2_button.style.border = "0.85px solid black";
        p2_button.style.color = "#241c15";
        p2_button.style.padding = "10px 50px";
        p2_button.style.fontWeight = "600";

        p3_div.style.display = "flex";
        p3_month.style.display = "flex";
        p3_text.innerText = "Starts at"
        p3_button.innerText = "Buy Now";
        p3_button.style.backgroundColor = "#ffe01b";
        p3_button.style.border = "0.85px solid black";
        p3_button.style.color = "#241c15";
        p3_button.style.padding = "10px 50px";
        p3_button.style.fontWeight = "600";

    } else if (x == 75000) {
        p1.innerText = "50,000";
        p2.innerText = "31,000";
        
        p1_div.style.display = "flex";
        p1_month.style.display = "flex";
        p1_text.innerText = "Starts at"
        p1_button.innerText = "Buy Now";
        p1_button.style.backgroundColor = "#ffe01b";
        p1_button.style.border = "0.85px solid black";
        p1_button.style.color = "#241c15";
        p1_button.style.padding = "10px 50px";
        p1_button.style.fontWeight = "600";

        p2_div.style.display = "flex";
        p2_month.style.display = "flex";
        p2_text.innerText = "Starts at"
        p2_button.innerText = "Buy Now";
        p2_button.style.backgroundColor = "#ffe01b";
        p2_button.style.border = "0.85px solid black";
        p2_button.style.color = "#241c15";
        p2_button.style.padding = "10px 50px";
        p2_button.style.fontWeight = "600";

        p3_div.style.display = "none";
        p3_month.style.display = "none";
        p3_text.innerText = "You've selected more contacts than this plan allows"
        p3_button.innerText = "Contact limit exceeded";
        p3_button.style.backgroundColor = "#dbd9d2";
        p3_button.style.border = "none";
        p3_button.style.color = "#776d5e";
        p3_button.style.padding = "10px 22px";
        p3_button.style.fontWeight = "400";
    } else if (x == 100000) {
        p1.innerText = "54,000";
        p2.innerText = "38,500";

        p1_div.style.display = "flex";
        p1_month.style.display = "flex";
        p1_text.innerText = "Starts at"
        p1_button.innerText = "Buy Now";
        p1_button.style.backgroundColor = "#ffe01b";
        p1_button.style.border = "0.85px solid black";
        p1_button.style.color = "#241c15";
        p1_button.style.padding = "10px 50px";
        p1_button.style.fontWeight = "600";

        p2_div.style.display = "flex";
        p2_month.style.display = "flex";
        p2_text.innerText = "Starts at"
        p2_button.innerText = "Buy Now";
        p2_button.style.backgroundColor = "#ffe01b";
        p2_button.style.border = "0.85px solid black";
        p2_button.style.color = "#241c15";
        p2_button.style.padding = "10px 50px";
        p2_button.style.fontWeight = "600";

        p3_div.style.display = "none";
        p3_month.style.display = "none";
        p3_text.innerText = "You've selected more contacts than this plan allows"
        p3_button.innerText = "Contact limit exceeded";
        p3_button.style.backgroundColor = "#dbd9d2";
        p3_button.style.border = "none";
        p3_button.style.color = "#776d5e";
        p3_button.style.padding = "10px 22px";
        p3_button.style.fontWeight = "400";
    } else if (x == 130000) {
        p1.innerText = "61,500";

        p1_div.style.display = "flex";
        p1_month.style.display = "flex";
        p1_text.innerText = "Starts at"
        p1_button.innerText = "Buy Now";
        p1_button.style.backgroundColor = "#ffe01b";
        p1_button.style.border = "0.85px solid black";
        p1_button.style.color = "#241c15";
        p1_button.style.padding = "10px 50px";
        p1_button.style.fontWeight = "600";

        p2_div.style.display = "none";
        p2_month.style.display = "none";
        p2_text.innerText = "You've selected more contacts than this plan allows"

        p3_div.style.display = "none";
        p3_month.style.display = "none";
        p3_text.innerText = "You've selected more contacts than this plan allows"

        p2_button.innerText = "Contact limit exceeded";
        p2_button.style.backgroundColor = "#dbd9d2";
        p2_button.style.border = "none";
        p2_button.style.color = "#776d5e";
        p2_button.style.padding = "10px 22px";
        p2_button.style.fontWeight = "400";

        p3_button.innerText = "Contact limit exceeded";
        p3_button.style.backgroundColor = "#dbd9d2";
        p3_button.style.border = "none";
        p3_button.style.color = "#776d5e";
        p3_button.style.padding = "10px 22px";
        p3_button.style.fontWeight = "400";
    } else if (x == 150000) {
        p1.innerText = "69,000";

        p1_div.style.display = "flex";
        p1_month.style.display = "flex";
        p1_text.innerText = "Starts at"
        p1_button.innerText = "Buy Now";
        p1_button.style.backgroundColor = "#ffe01b";
        p1_button.style.border = "0.85px solid black";
        p1_button.style.color = "#241c15";
        p1_button.style.padding = "10px 50px";
        p1_button.style.fontWeight = "600";

        p2_div.style.display = "none";
        p2_month.style.display = "none";
        p2_text.innerText = "You've selected more contacts than this plan allows"

        p3_div.style.display = "none";
        p3_month.style.display = "none";
        p3_text.innerText = "You've selected more contacts than this plan allows"

        p2_button.innerText = "Contact limit exceeded";
        p2_button.style.backgroundColor = "#dbd9d2";
        p2_button.style.border = "none";
        p2_button.style.color = "#776d5e";
        p2_button.style.padding = "10px 22px";
        p2_button.style.fontWeight = "400";

        p3_button.innerText = "Contact limit exceeded";
        p3_button.style.backgroundColor = "#dbd9d2";
        p3_button.style.border = "none";
        p3_button.style.color = "#776d5e";
        p3_button.style.padding = "10px 22px";
        p3_button.style.fontWeight = "400";
    } else if (x == 200000) {
        p1.innerText = "84,500";

        p1_div.style.display = "flex";
        p1_month.style.display = "flex";
        p1_text.innerText = "Starts at"
        p1_button.innerText = "Buy Now";
        p1_button.style.backgroundColor = "#ffe01b";
        p1_button.style.border = "0.85px solid black";
        p1_button.style.color = "#241c15";
        p1_button.style.padding = "10px 50px";
        p1_button.style.fontWeight = "600";

        p2_div.style.display = "none";
        p2_month.style.display = "none";
        p2_text.innerText = "You've selected more contacts than this plan allows"

        p3_div.style.display = "none";
        p3_month.style.display = "none";
        p3_text.innerText = "You've selected more contacts than this plan allows"

        p2_button.innerText = "Contact limit exceeded";
        p2_button.style.backgroundColor = "#dbd9d2";
        p2_button.style.border = "none";
        p2_button.style.color = "#776d5e";
        p2_button.style.padding = "10px 22px";
        p2_button.style.fontWeight = "400";

        p3_button.innerText = "Contact limit exceeded";
        p3_button.style.backgroundColor = "#dbd9d2";
        p3_button.style.border = "none";
        p3_button.style.color = "#776d5e";
        p3_button.style.padding = "10px 22px";
        p3_button.style.fontWeight = "400";
    } else if (x == 250000) {
        p1_text.innerText = "Talk to Sales at"
        p1.innerText = "+1 (800) 330-4838";
        p1.style.lineHeight = "30px"
        p1.style.fontSize = "25px"
        p1.style.marginBottom = "40px"
        p1_div.style.display = "none";
        p1_month.style.display = "none";

        p1_button.innerHTML = `Contact Sales  <i class="fa fa-envelope"></i>`;
        p1_button.style.padding = "10px 30px";

        p2_div.style.display = "none";
        p2_month.style.display = "none";
        p2_text.innerText = "You've selected more contacts than this plan allows"

        p3_div.style.display = "none";
        p3_month.style.display = "none";
        p3_text.innerText = "You've selected more contacts than this plan allows"

        p2_button.innerText = "Contact limit exceeded";
        p2_button.style.backgroundColor = "#dbd9d2";
        p2_button.style.border = "none";
        p2_button.style.color = "#776d5e";
        p2_button.style.padding = "10px 22px";
        p2_button.style.fontWeight = "400";

        p3_button.innerText = "Contact limit exceeded";
        p3_button.style.backgroundColor = "#dbd9d2";
        p3_button.style.border = "none";
        p3_button.style.color = "#776d5e";
        p3_button.style.padding = "10px 22px";
        p3_button.style.fontWeight = "400";
    }
}


// FAQs Functionality
let f1 = document.getElementById("f1");
let f1_minus = document.getElementById("f1_minus");
let f1_div = document.getElementById("f1_div");
f1.onclick = () => {
    f1_div.style.display = "flex";
    f1.style.display = "none";
    f1_minus.style.display = "flex";
}
f1_minus.onclick = () => {
    f1_div.style.display = "none";
    f1.style.display = "flex";
    f1_minus.style.display = "none";
}

let f2 = document.getElementById("f2");
let f2_minus = document.getElementById("f2_minus");
let f2_div = document.getElementById("f2_div");
f2.onclick = () => {
    f2_div.style.display = "flex";
    f2.style.display = "none";
    f2_minus.style.display = "flex";
}
f2_minus.onclick = () => {
    f2_div.style.display = "none";
    f2.style.display = "flex";
    f2_minus.style.display = "none";
}

let f3 = document.getElementById("f3");
let f3_minus = document.getElementById("f3_minus");
let f3_div = document.getElementById("f3_div");
f3.onclick = () => {
    f3_div.style.display = "flex";
    f3.style.display = "none";
    f3_minus.style.display = "flex";
}
f3_minus.onclick = () => {
    f3_div.style.display = "none";
    f3.style.display = "flex";
    f3_minus.style.display = "none";
}

let f4 = document.getElementById("f4");
let f4_minus = document.getElementById("f4_minus");
let f4_div = document.getElementById("f4_div");
f4.onclick = () => {
    f4_div.style.display = "flex";
    f4.style.display = "none";
    f4_minus.style.display = "flex";
}
f4_minus.onclick = () => {
    f4_div.style.display = "none";
    f4.style.display = "flex";
    f4_minus.style.display = "none";
}

let f5 = document.getElementById("f5");
let f5_minus = document.getElementById("f5_minus");
let f5_div = document.getElementById("f5_div");
f5.onclick = () => {
    f5_div.style.display = "flex";
    f5.style.display = "none";
    f5_minus.style.display = "flex";
}
f5_minus.onclick = () => {
    f5_div.style.display = "none";
    f5.style.display = "flex";
    f5_minus.style.display = "none";
}