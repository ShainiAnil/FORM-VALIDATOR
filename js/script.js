// Dom Elements 

let formEl = document.getElementById("form");
let messageEl = document.getElementById("message");
let messageContainerEl = document.querySelector(".message-container");
let passwords = document.querySelectorAll(".password");

//Flags 

let isValid = false;
let storedData = {};

//Utility function

const updateClasses = (domEl, addClass, removeClass) => {
    domEl.classList.remove(removeClass);
    domEl.classList.add(addClass);
}
const updateMessage = (message) => {
    messageEl.innerHTML = message;
};

//Validationg form fields

const validateForm = () => {
    isValid = formEl.checkValidity()
    return isValid
};

/*Password validation starts here */

const checkPassword = ()=>{
    let password1Value = passwords[0].value;
    let password2Value = passwords[1].value;
    if(password1Value === password2Value){
        passwords.forEach((password)=>{
            password.classList.remove("fail") 
            password.classList.add("pass") 
        })
        return true;
    } 
    else{
        passwords.forEach((password)=>{
            password.classList.remove("pass") 
            password.classList.add("fail")
        })
        return false;
    }
}
/*Password validation ends here*/

//Store data 
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

//Process form data
const processFormData = (event) => {
    event.preventDefault();
    if(validateForm()){
        if(checkPassword()){
            updateMessage("Registration successful")
            updateClasses(messageContainerEl, "pass", "fail")
            storeFormData();
        }
        else{
            messageEl.innerHTML = "Password mismatch found";
            messageContainerEl.classList.remove("pass");
            messageContainerEl.classList.add("fail");
        }
    }
    else{
        updateMessage("Something is wrong")
        updateClasses(messageContainerEl, "fail", "pass")
    }
}

//Event Listeners
formEl.addEventListener("submit", processFormData);