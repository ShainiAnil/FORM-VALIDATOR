let formEl =  document.querySelector("#form");
let messageEl = document.querySelector("#message");
let messageContainerEl = document.querySelector(".message-container");
let passwords = document.querySelectorAll(".password");

const updateProperties = (element,addClass,removeClass) =>{
    element.classList.remove(removeClass);
    element.classList.add(addClass);
}

const updateMsg = (msg)=>{
    messageEl.innerHTML = msg;
}

const storeFormData = ()=>{
    storedData = {
        fullName : formEl.name.value,
        phNumber : formEl.phone.value,
        emailAddress : formEl.email.value,
        website : formEl.website.value,
        password : formEl.password1.value
    };
    console.log(storedData);
}

const passwordCheck = () =>{
    let pass1 = passwords[0].value;
    let pass2 = passwords[1].value    
    if(pass1 === pass2){
            passwords.forEach(password=>{
            updateProperties(password,"pass","fail")
        })
        return true;
    }
    else{
        passwords.forEach(password=>{
            updateProperties(password,"fail","pass")
        })
        return false;
    }
}

const processFormData = (e)=>{ 
   
    let SuccessMsg = "Registration successful";
    let failMsg = "Something is wrong";
    let passMatch = false;
    let misMatchMsg = "Password mismatch Found"
    e.preventDefault();
    let isValid = formEl.checkValidity();
    
    if(isValid){
        passMatch = passwordCheck()
        if(passMatch){
            storeFormData(); 
            updateProperties(messageContainerEl,"pass", "fail");
            updateMsg(SuccessMsg) 
        }
        else{
            updateProperties(messageContainerEl,"fail","pass");
            updateMsg(misMatchMsg);
        }
    } 
    else{
        updateProperties(messageContainerEl,"fail","pass");
         updateMsg(failMsg);
    } 
}
formEl.addEventListener("submit", processFormData);