// 1. add click event handler with the submit button

document.getElementById('login-btn').addEventListener('click', function(){
    // 2. get the email address inside the email input field
    // always remember to use .value to get text form an input field
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    // 3. get password
    //3.a: set id on the html element
    //3.b: get the element
    //3.c: gte the value from the element
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    //! DANEGR: DO NOT VERIDY email password on the client side
    // 4. verify email and password
    if (email === 'jahid@info.com' && password === 'password') {
        window.location.href = 'dashbord.html';
    }
    else{
        alert("Woring information");
    }
})