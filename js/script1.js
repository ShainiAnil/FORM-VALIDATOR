const formEl = document.getElementById("form");
const messageContainerEL = document.querySelector(".message-container");
const messageEl = document.getElementById("message");
const passwords = document.querySelectorAll(".password");

//ultilty function
const updateMessage = (msg) => {
  messageEl.innerHTML = msg;
};

const updateClassess = (addclass, removeclass, domEl) => {
  domEl.classList.remove(removeclass); //pass
  domEl.classList.add(addclass); //fail
};

let isValid = false;
let pass1, pass2
const validateFormData = () => {
  isValid = formEl.checkValidity();
  return isValid;
};

const storeData = () => {
    
  let data = {
    fullName: formEl.name.value,
    phone: formEl.phone.value,
    email: formEl.email.value,
    website: formEl.website.value,
    password:  pass1
  };
  console.log(data);
};

const checkPassword = () => {
    pass1 =passwords[0].value;
    pass2 =passwords[1].value;
    if (pass1 === pass2) {
    passwords.forEach((password) => {
     updateClassess("pass", "fail", password); //true
    });
    return true;
  } else {
    passwords.forEach((password) => {
      updateClassess("fail", "pass", password); //falls
    });
    return false;
  }
};

const processFormData = (event) => {
  event.preventDefault();
  //console.log("passwords=",pass1);

  if (validateFormData()) {
    if (checkPassword()) {
      updateMessage("Registration Sucessfully completed");
      updateClassess("pass", "fail", messageContainerEL);
      //in true condition we can go throw storedData()

      storeData(); //function
    } else {
      updateMessage("Password MissMatch Found");
      updateClassess("fail", "pass", messageContainerEL);
    }
  } else {
    updateMessage("something is wrong");
    updateClassess("fail", "pass", messageContainerEL);
  }
};
//ADD events listner
formEl.addEventListener("submit", processFormData);
