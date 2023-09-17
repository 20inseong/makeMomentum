const logInForm = document.querySelector("#logInForm");
const HIDDEN_CLASS = "hidden";

function showGreeting(){
    const greeting = document.createElement("h1");
    greeting.innerText = `Hello ${localStorage.getItem("username")}`;
    greeting.classList.add("greeting");
    document.body.appendChild(greeting);
}

function uploadId(event){
    event.preventDefault();
    const logInName = document.querySelector("#ID").value;
    localStorage.setItem("username",`${logInName}`);
    logInForm.classList.add(HIDDEN_CLASS);
    showGreeting();
}

const saveID = localStorage.getItem("username");
if(saveID === null){
    logInForm.classList.add("greeting");
    logInForm.classList.remove(HIDDEN_CLASS);
    logInForm.addEventListener("submit", uploadId);
}
else{
    showGreeting();
}