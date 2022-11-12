let btn = document.getElementById("btn")
btn.addEventListener("click",myfun)

function myfun(){
    let input = document.getElementById("number").value
    let date = document.getElementById("date").value
    let code = document.getElementById("Security").value

    if(input.length < 20){
        alert("Invalid Card Number")
    }

    if(input && date && code.length == 4){
        alert("Payment Succesfull")
    } else{
        alert("Payment Unsuccesfull")
    }
