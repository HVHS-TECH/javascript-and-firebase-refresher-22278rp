/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the constants & functions required from fb_io module
import { fb_initialise }
    from './fb_io.mjs';
window.fb_initialise = fb_initialise;
import { fb_authenticate }
    from './fb_io.mjs';
window.fb_authenticate = fb_authenticate;


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

