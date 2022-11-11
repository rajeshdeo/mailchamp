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

let contacts = document.getElementById("contacts");
contacts.onchange = () => {

    let x = contacts.value;

    if(x > 500){
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

    if(x == 500){
        p1.innerText = "23,000";
        p2.innerText = "1,150";
        p3.innerText = "770"
    } else if(x == 1500){
        p1.innerText = "23,000";
        p2.innerText = "3,850";
        p3.innerText = "1,500"
    } else if(x == 2500){
        p1.innerText = "23,000";
        p2.innerText = "3,850";
        p3.innerText = "2,300"
    } else if(x == 5000){
        p1.innerText = "23,000";
        p2.innerText = "5,800";
        p3.innerText = "3,850";
    } else if(x == 10000){
        p1.innerText = "23,000";
        p2.innerText = "7,600";
        p3.innerText = "5,800";
    } else if(x == 15000){
        p1.innerText = "27,000";
        p2.innerText = "12,200";
        p3.innerText = "9,900";
    } else if(x == 20000){
        p1.innerText = "31,000";
        p2.innerText = "14,500";
        p3.innerText = "12,200";
    } else if(x == 25000){
        p1.innerText = "34,500";
        p2.innerText = "17,000";
        p3.innerText = "14,500";
    } else if(x == 30000){
        p1.innerText = "38,500";
        p2.innerText = "19,500";
        p3.innerText = "17,000";
    } else if(x == 40000){
        p1.innerText = "42,500";
        p2.innerText = "21,000";
        p3.innerText = "19,500";
    } else if(x == 50000){
        p1.innerText = "46,000";
        p2.innerText = "23,000";
        p3.innerText = "20,000";
    } else if(x == 75000){
        p1.innerText = "50,000";
        p2.innerText = "31,000";

        p3_div.style.display = "none";
        p3_month.style.display = "none";
        p3_text.innerText = "You've selected more contacts than this plan allows"

        p3_button.innerText = "Contact limit exceeded";
        p3_button.style.backgroundColor = "#dbd9d2";
        p3_button.style.border = "none";
        p3_button.style.color = "#776d5e";
        p3_button.style.padding = "10px 22px";
        p3_button.style.fontWeight = "400";
    } else if(x == 100000){
        p1.innerText = "54,000";
        p2.innerText = "38,500";

        p3_div.style.display = "none";
        p3_month.style.display = "none";
        p3_text.innerText = "You've selected more contacts than this plan allows"

        p3_button.innerText = "Contact limit exceeded";
        p3_button.style.backgroundColor = "#dbd9d2";
        p3_button.style.border = "none";
        p3_button.style.color = "#776d5e";
        p3_button.style.padding = "10px 22px";
        p3_button.style.fontWeight = "400";
    } else if(x == 130000){
        p1.innerText = "61,500";

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
    } else if(x == 150000){
        p1.innerText = "69,000";
        
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
    } else if(x == 200000){
        p1.innerText = "84,500";
        
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
    } else if(x == 250000){
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



