const email = document.getElementById("email");
const password = document.getElementById("password");
const loginForm = document.getElementById("loginForm");
const btn1 = document.getElementById("btn1");
const forgotPasswordText = document.getElementById("forgotPasswordText");

// Function to set the login state and update the button text

function setLoginState(isLoggedIn) {
    btn1.textContent = isLoggedIn ? "Log Out" : "Log In";

    if (!isLoggedIn) {
        email.value = "";
        password.value = "";
    }
}

// Login and logout functionality

btn1.addEventListener("click", function(event) {
    event.preventDefault();

    if (btn1.textContent === "Log In") {
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        if (!emailValue || !passwordValue) {
            alert("Please enter email and password.");
            return;
        }

        alert("Login successful for: " + emailValue);
        email.value = emailValue;
        password.value = passwordValue;
        setLoginState(true);
        return;
    }

    alert("Logout successful.");
    setLoginState(false);
});

// Forgot password functionality

forgotPasswordText.addEventListener("click", function() {
    const email = prompt("Enter your email to reset your password:");

    if (!email) {
        alert("Email is required to reset the password.");
        return;
    }

    const newPassword = prompt("Enter your new password:");

    if (!newPassword) {
        alert("New password is required.");
        return;
    }

    email.value = email;
    password.value = newPassword;

    alert("Password reset successfully!\nYour new password has been saved.");
    btn1.textContent = "Log Out";
});

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
});

// Account creation functionality

let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function() {
    let name = prompt("Enter your name:");
    let phone = prompt("Enter your phone number:");
    let password = prompt("Enter your password:");

    if (name && phone && password) {
        alert("Account created successfully!\nName: " + name + "\nPhone: " + phone + "\nPassword: " + password);
    }
});