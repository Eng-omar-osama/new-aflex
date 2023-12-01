let new_user_name = document.getElementById('login-username1');
let new_password = document.getElementById('login-password2');


new_user_name.onkeyup = function() {
    localStorage.setItem('new_account_username',new_user_name.value);
}
new_password.onkeyup = function() {
    localStorage.setItem('new_account_password',new_password.value);
}
