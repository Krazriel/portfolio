function validate(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username == "Lucifer" && password == "Morningstar"){
        location.assign('html/home.html');
    }
    else{
        alert('Incorrect');
    }
}