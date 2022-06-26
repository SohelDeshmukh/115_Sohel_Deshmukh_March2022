window.addEventListener('DOMContentLoaded',()=>{

    const empno=document.querySelector("#empno");
    const deptid=document.querySelector("#deptid");
    const location=document.querySelector("#location");
    const msg=document.querySelector("#msg");

    empno.addEventListener('blur',()=>{

        if(empno.value == 0){
            msg.innerHTML="Empdetails not found.";
            deptid.value="";
            location.value="";
        }else if(empno.value % 2 == 0){
            deptid.value="2";
            location.value="Mumbai";
        }
        else{
            deptid.value="3";
            location.value="Pune";
        }
        });

});