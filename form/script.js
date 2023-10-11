document.addEventListener("DOMContentLoaded", function() { 
    const form = document.getElementById("registration-form"); 
    const usernameInput = document.getElementById("username"); 
    const emailInput = document.getElementById("email"); 
    const passwordInput = document.getElementById("password"); 
    const confirmPasswordInput = document.getElementById("confirm-password"); const phoneInput = document.getElementById("phone"); 
    const usernameError = document.getElementById("username-error"); const emailError = document.getElementById("email-error"); 
    const passwordError = document.getElementById("password-error"); const confirmPasswordError = document.getElementById("confirm-password-error"); const phoneError = document.getElementById("phone-error"); 
    isformValid = true;
    function validateUsername() { 
    if (usernameInput.value.length <= 5) { 
    usernameError.style.display = "block"; 
    isformValid = false 
    } else { 
    usernameError.style.display = "none"; 
    isformValid = true 
    } 
    } 
    function validateEmail() { 
    const email = emailInput.value; 
    if (!email.includes("@")) { 
    emailError.style.display = "block"; 
    isformValid = false 
    } else { 
    emailError.style.display = "none"; 
    isformValid = true 
    } 
    } 
    function validatePassword() { 
    const password = passwordInput.value; 
    if (password.length < 8 || password === "password" || password === usernameInput.value) { passwordError.style.display = "block"; 
    isformValid = false 
    } else { 
    passwordError.style.display = "none"; 
    isformValid = true 
    } 
    validateConfirmPassword(); // Trigger confirm password validation 
    } 
    function validateConfirmPassword() { 
    const confirmPassword = confirmPasswordInput.value; 
    const password = passwordInput.value; 
    if (confirmPassword !== password) { 
    confirmPasswordError.style.display = "block"; 
    isformValid = false 
    } else { 
    confirmPasswordError.style.display = "none"; 
    isformValid = true 
    } 
    } 
    function validatePhoneNumber() { 
    const phoneNumber = phoneInput.value; 
    if (phoneNumber === "123456789" || phoneNumber.length !== 10 || isNaN(phoneNumber)) { phoneError.style.display = "block"; 
    isformValid = false 
    } else { 
    phoneError.style.display = "none"; 
    isformValid = true 
    }
    } 
    form.addEventListener("submit", function(event) { 
    event.preventDefault(); // Prevent form submission 
    validateUsername(); 
    validateEmail(); 
    validatePassword(); 
    validateConfirmPassword(); 
    validatePhoneNumber(); 
    if (isformValid) { 
    document.getElementById('registration-form').addEventListener('submit', function (event) { // Hide the form 
    document.getElementById('registration-form').classList.add('hidden'); 
    // Display congratulations message 
    document.getElementById('message').classList.remove('hidden'); 
    });  
    }else{ 
    document.getElementById('registration-form').addEventListener('submit', function (event) { // Prevent form submission 
    event.preventDefault(); 
    }); 
    } 
    }); 
    usernameInput.addEventListener("blur", validateUsername); 
    emailInput.addEventListener("blur", validateEmail); 
    passwordInput.addEventListener("blur", validatePassword); 
    confirmPasswordInput.addEventListener("blur", validateConfirmPassword); 
    phoneInput.addEventListener("blur", validatePhoneNumber); 
    }); 
    let eyeicon = document.getElementById("eyeicon"); 
    eyeicon.onclick = function() { 
    if (password.type === "password") { 
    password.type = "text"; 
    eyeicon.src = "https://cdn-icons-png.flaticon.com/512/63/63568.png"; 
    } else { 
    password.type = "password"; 
    eyeicon.src =  
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/OOjs_UI_icon_eyeClosed.svg/1200px -OOjs_UI_icon_eyeClosed.svg.png"; 
    } 
    }
    