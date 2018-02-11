if (typeof(Storage) !== "undefined") {
    // Store
    sessionStorage.setItem("admin", "admin");
} 
else {
    console.log("Sorry, your browser does not support Web Storage...");
}

function signUpPress(){
    window.location.href = "signUp.html";
}
function signInPress(){
    var accName = document.getElementById("userName").value;
    var accPass = document.getElementById("userPass").value;

    var okay = false;

    if(sessionStorage.getItem(accName) == accPass){
        okay = true;
    }

    if(okay == true){
        // get correct home page later
        window.location.href = "home.html";
    }
    else{
        alert("Username and password combination not found");
    }
    
}