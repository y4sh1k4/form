function inputcheck(){
    let haserror=false;
    let input=document.querySelectorAll('input');
    for(i=0;i<input.length-1;i++){
        let currentclass=input[i].getAttribute('class')
        if(input[i].value.length===0){
            document.querySelector('.p'+i).textContent="*"+currentclass+" cannot be empty";
            haserror=true;
        }
        else{
            if(input[i].getAttribute('id')=="num"){
                if(document.querySelector("#num").value.length!=10){
                    document.querySelector('.p'+i).textContent=("*Please enter a valid phone number");
                    haserror=true;
                }
                else{
                    document.querySelector('.p'+i).textContent=("");
                    console.log(input[i].value);
                    haserror=false;
                }
            }
            else if(input[i].getAttribute('id')=="pass"){
                let uppercasevalue=false;
                let numericvalue=false;
                let pcheck=false;
                document.querySelector('.p'+i).textContent=("");

                for(let j=0;j<input[i].value.length;j++){
                    if (input[i].value.charAt(j)===(input[i].value.charAt(j).toUpperCase())){
                        uppercasevalue=true;
                    }
                    if(!isNaN(input[i].value.charAt(j))){
                        numericvalue=true;
                    }
                    if(uppercasevalue && numericvalue && input[i].value.length>=8){
                        pcheck=true;
                    }
                }
                if(pcheck){
                    document.querySelector('.p'+i).textContent=("");
                    console.log(input[i].value);
                    haserror=false;
                }
                else{
                    document.querySelector('.p'+i).textContent=("*Password field must contain atleast 8 characters, one numeric value and one uppercase value");
                    haserror=true;
                }
            }
            else if(input[i].getAttribute('class')=="Email id"){
                let acheck=false;
                let dotcheck=false;
                let emailcheck=false;
                for(let k=0;k<input[i].value.length;k++){
                    if((input[i].value)[k]=="@"){
                        acheck=true;
                    }
                    if((input[i].value)[k]=="."){
                        dotcheck=true;
                    }
                    if(acheck&&dotcheck){
                        emailcheck=true;
                    }
                }
                if(emailcheck){
                    document.querySelector('.p'+i).textContent=("");
                    console.log(input[i].value);
                    haserror=false;
                }
                else{
                    document.querySelector('.p'+i).textContent=("*Please enter a valid email address");
                    haserror=true;
                }
            }
            else{
                document.querySelector('.p'+i).textContent=("");
                console.log(input[i].value);
                haserror=false;
            }
            
        }
    }
    if(!document.querySelector('.Checkbox').checked){
        document.querySelector('.p5').textContent=("*Kindly Agree to the Terms & Conditions");
    }
    else{
        document.querySelector('.p5').textContent=("");
    }
    if(!haserror){
        alert("Form Submitted Successfully")
    }
}
