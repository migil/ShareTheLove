

var people = [
    ("admin", "admin")
];

function signUpPress(){
    window.location.href = "signUp.html";
}
function signInPress(){
    var accName = document.getElementById("userName").value;
    var accPass = document.getElementById("userPass").value;

    var combo = (accName, accPass);
    var okay = false;

    for (var i = 0; i < people.length; i++){
        if (people[i] == combo){
            okay = true;
        }
    }
    if(okay == true){
        // get correct home page later
        window.location.href = "home.html";
    }
    else{
        alert("Username and password combination not found");
    }
    
}