function login(){
    var net1 =
    document.getElementById('username').value 
    +
    document.getElementById('password').value;
    var net2 = ('himalwa') + ('220504');
    if (net1 == net2){
        var logakses = document.getElementById('akses').innerHTML = 'Login Success';
    }
    else {
        var logakses = document.getElementById('akses').innerHTML = 'Login Failed';
    }
}