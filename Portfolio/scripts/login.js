function validate(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username == "Lucifer" && password == "Morningstar"){
        location.assign('home.html');
    }
    else{
        alert('Incorrect');
    }
}