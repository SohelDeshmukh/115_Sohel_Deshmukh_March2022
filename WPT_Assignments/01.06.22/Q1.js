window.addEventListener("DOMContentLoaded",()=>{

    const regBtn = document.querySelector("#regBtn");
    const logBtn = document.querySelector("#logBtn");
    const email = document.querySelector("#email");
    const pass = document.querySelector("#pass");
    const loc = document.querySelector("#loc");
    const msg = document.querySelector("#msg");

    regBtn.addEventListener('click',()=>{
            console.log("Register Button Clicked!");

            if(email.value=='a' && pass.value=='b' && loc.value=='c'){
                msg.innerHTML = "Registraion Failed!";
            }else{
                msg.innerHTML = "Registraion Succeeded!";
            }

    });

    logBtn.addEventListener('click',()=>{
            console.log("Login Button Clicked!");

    });


    

});