const email = document.getElementById("email");
const small = document.getElementById("small");

handleemail = event => {
    event.preventDefault();
    const input = email.value;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!input.match(emailRegex)) {
        email.style.border = "1px solid var(--Light-Red)";
        small.classList.add("d-block");
    } else {
        email.style.border = "2px solid var(--Pale-Blue)";
        small.classList.remove("d-block");
    }
}