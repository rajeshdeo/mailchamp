let btn = document.getElementById("btn")
btn.addEventListener("click",myfun)

function myfun(){
    let input = document.getElementById("number").value
    let date = document.getElementById("date").value
    let code = document.getElementById("Security").value

    if(input.length==0)
    {
        alert("Please fill the details !")
    }
    else if(input.length<16 || input.length>16 ){
        alert("Invalid Card Number")
    }

    else if( input.length==16 && input && date && code.length == 3){
        alert("Payment Succesfull");
        window.location.href="index.html"
    } else{
        alert("Payment Unsuccesfull !")
    }
}
