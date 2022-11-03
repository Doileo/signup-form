// Targeting all classes and id from the HTML

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

//Storing the classes and id inside these variables

let firstname = id("firstname"),
    lastname = id("lastname"),
    email = id("email"),
    password = id("password"),
    form = id("form"),

    errorMessage = classes("error"),
    errorIcon = classes("error-icon");

//Targetting the form and adding the submit event listener
form.addEventListener("submit",  (e) => {
    e.preventDefault();

    engine(firstname, 0, "First Name cannot be empty");
    engine(lastname, 1, "Last Name cannot be empty");
    engine(email, 2, "Looks like this is not an email");
    engine(password, 3, "Password cannot be empty");
});

//Creating a function to do form validation work
//id.value.trim() will remove white spaces from the value the user inputs
// we want to print a message inside the error class
//secondly, we want the error icon to highlight as well

let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMessage[serial].innerHTML = message;
        id.style.border = "2px solid red";  // Adding code for the proper work for the icons

        //icon
        errorIcon[serial].style.opacity = "1";
    } else {
        errorMessage[serial].innerHTML = "";
        id.style.border = "2px solid green";

        //icon
        errorIcon[serial].style.opacity = "0";
    }
};

//My form doesn't respond to any inputs
