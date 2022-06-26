window.addEventListener("DOMContentLoaded",()=>{

    const num1 = document.querySelector("#num1");
    const num2 = document.querySelector("#num2");
    const mulBtn = document.querySelector("#mulBtn");
    const subBtn = document.querySelector("#subBtn");
    const msg = document.querySelector("#msg");

    mulBtn.addEventListener('click',()=>{
        let result = num1.value * num2.value;
        msg.innerHTML = result;
        
    });
    
    subBtn.addEventListener('click',()=>{
        let result = num1.value - num2.value;
        msg.innerHTML = result;

    });


    

});