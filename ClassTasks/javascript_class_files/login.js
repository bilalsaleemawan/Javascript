if (localStorage.getItem('username') !== null) {
    window.location.href = '/ClassTasks/html_class_files/arry.html';
}
const userName = document.getElementById('username');

const password = document.getElementById('password');

const form = document.getElementById('form');


const userNameError = document.getElementById('usernameerror');
// console.log(userNameError);

const passwordError = document.getElementById('passworderror');
// console.log(passwordError);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    userNameError.textContent = "";
    passwordError.textContent = "";

    if ((userName.value === "bilal") && (password.value === "1234")) {

        localStorage.setItem('username', userName.value);
        // console.log("Login Success");
        window.location.href = '/ClassTasks/html_class_files/arry.html';
    } else {
        // alert ("Login Fail");



        if (userName.value !== "bilal") {
            userNameError.textContent = "Invalid username";

        }
        if (password.value !== "1234") {
            passwordError.textContent = "Invalid password";
        }
    }
});