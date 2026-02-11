function start() {
    messageSpace.innerHTML = "You've connected to the JavaScript!";
    buttonPressed.innerHTML = "You pressed the button!";
    console.log ("hello");
}
function getFormInput() {
 const OUTPUT = document.getElementById("javaScriptOutput");
 const NAME = document.getElementById("name");
 let userName = NAME.value;
 OUTPUT.innerHTML = "<p>Your name is "+userName+"</p>";
}




