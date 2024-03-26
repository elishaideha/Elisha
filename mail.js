const firebaseConfig = {
    apiKey: "AIzaSyBp5MIaEHUM7XWDzpxeV8ZnDQ02wk-nZYQ",
    authDomain: "contact-form-32fa1.firebaseapp.com",
    databaseURL: "https://contact-form-32fa1-default-rtdb.firebaseio.com",
    projectId: "contact-form-32fa1",
    storageBucket: "contact-form-32fa1.appspot.com",
    messagingSenderId: "339964632710",
    appId: "1:339964632710:web:89d19d9798905966ed7b07"
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var message = getElementVal("message");
    console.log(name, email, message)

    saveMessages(name, email, message);

    document.querySelector(".alert").style.display = "block";

    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);


    document.getElementById("contactForm").reset();
}

const saveMessages = (name, email, message) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        email: email,
        message: message,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};