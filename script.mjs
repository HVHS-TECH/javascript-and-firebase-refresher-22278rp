function start() {
    messageSpace.innerHTML = "You've connected to the JavaScript!";
    buttonPressed.innerHTML = "You pressed the button!";
    console.log ("hello");
}
function getFormInput() {
 const OUTPUT = document.getElementById("javaScriptOutput");
 const NAME_FIELD = document.getElementById("nameField");
 let userName = NAME_FIELD.value;
 OUTPUT.innerHTML = "<p>Your name is "+userName+"</p>";
}




