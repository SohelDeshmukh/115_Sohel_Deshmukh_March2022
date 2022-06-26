window.addEventListener('DOMContentLoaded', () =>{

    let empNo = document.querySelector('#empNo');
    let empName = document.querySelector('#empName');
    let empEmail = document.querySelector('#empEmail');
    let empDeptid = document.querySelector('#empDeptno');
    const Emp = [{empNo:111,empName:"Shubhangi",empEmail:"aaa@xyz.com",empDeptid:1},
                {empNo:112,empName:"Siddhant",empEmail:"bbb@xyz.com",empDeptid:1},
                {empNo:113,empName:"Siddhesh",empEmail:"ccc@xyz.com",empDeptid:2},
                {empNo:114,empName:"Snehal",empEmail:"ddd@xyz.com",empDeptid:3},
                {empNo:115,empName:"Sohel",empEmail:"eee@xyz.com",empDeptid:1}];
    //var html = "<table border='1|1'>"

    let btnAdd = document.querySelector('#btnAdd');
    let btnRemove = document.querySelector('#btnRemove');
    let btnModify = document.querySelector('#btnModify');
    let btnViewAll = document.querySelector('#btnViewAll');
    let btnVOD = document.querySelector('#btnVOD');
    let sp = document.querySelector('#sp');
    let Y = document.querySelector('#Y');
 

    empNo.addEventListener('blur', () =>{
    let numEntered = empNo.value;
    for (let i = 0; i < Emp.length; i++) {
      if (numEntered == Emp[i].empNo) {
        btnModify.disabled = false;
        btnRemove.disabled = false;
        btnAdd.disabled = true;
        sp.innerHTML = "Present";
        break;
      } else {
        console.log("else");
        btnModify.disabled = true;
        btnRemove.disabled = true;
        btnAdd.disabled = false;
        sp.innerHTML = "Not Present"
      }
    }

    });
    btnAdd.addEventListener('click', () => {

        Emp.push({empNo:empNo.value,empName:empName.value,empEmail:empEmail.value,empDeptid:empDeptid.value});
        btnModify.disabled = true;
        btnRemove.disabled = true;
        btnAdd.disabled = true;
        sp.innerHTML = "Element added";
        empNo.value = "";
        empName.value = "";
        empDeptid.value = "";
        empEmail.value = "";
      });
    
      btnModify.addEventListener('click', () => {
    
        // var index = Emp.indexOf(empNo.value);
        let i = 0;
        while (i < Emp.length) {
          if (empNo.value == Emp[i].empNo)
            break;
          i++;
        }
        let newValue = prompt("Enter new empNo");
        Emp[i].empNo = newValue;
        let newValue1 = prompt("Enter new empName");
        Emp[i].empName = newValue1;
        let newValue2 = prompt("Enter new empEmail");
        Emp[i].empEmail = newValue2;
        let newValue3 = prompt("Enter new empDeptid");
        Emp[i].empDeptid = newValue3;
        sp.innerHTML = "Element edited";
        empNo.value = "";
        empName.value = "";
        empDeptid.value = "";
        empEmail.value = "";
      });
    
      btnRemove.addEventListener('click', () => {
    
        let i = 0;
        while (i < Emp.length) {
          if (empNo.value == Emp[i].empNo)
            break;
          i++;
        }
        Emp.splice(i, 1);
        sp.innerHTML = "Element removed";
        empNo.value = "";
        empName.value = "";
        empDeptid.value = "";
        empEmail.value = "";
      });

      btnViewAll.addEventListener('click', () => {

        Y.innerHTML="";
        for(let i =0; i<Emp.length; i++){
            
            Y.innerHTML+='<span>'+Emp[i].empNo+'</span>'+" ";
            Y.innerHTML+='<span>'+Emp[i].empName+'</span>'+" ";
            Y.innerHTML+='<span>'+Emp[i].empEmail+'</span>'+" ";
            Y.innerHTML+='<span>'+Emp[i].empDeptid+'</span>'+" ";
            Y.innerHTML+='<br>';
        }
        //document.getElementById("table").innerHTML = Y;
      });

      btnVOD.addEventListener('click', () => {
        
        let tempId=empDeptid.value;
        Y.innerHTML="";
        for(let i =0; i<Emp.length; i++){
          if(tempId==Emp[i].empDeptid){
           
            Y.innerHTML+='<span>'+Emp[i].empNo+'</span>'+" ";
            Y.innerHTML+='<span>'+Emp[i].empName+'</span>'+" ";
            Y.innerHTML+='<span>'+Emp[i].empEmail+'</span>'+" ";
            Y.innerHTML+='<span>'+Emp[i].empDeptid+'</span>'+" ";
            Y.innerHTML+='<br>';
          }
      }
      });

      
});