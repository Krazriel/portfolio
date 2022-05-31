function validate(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username == "admin" && password == "Welcome1"){
        location.assign('html/home.html');
    }
    else{
        alert('Incorrect');
    }
}