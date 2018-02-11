function cancelPress(){
    window.location.href = "index.html";
}
function submitPress(){
    if (checkCred() == true){
        // enter data into database at some point
        window.location.href = "index.html";
    }
}

function checkCred(){
    var accName = document.getElementById("userName").value;
    var accPass = document.getElementById("userPass").value;

    var okay = true;
    if(accName.length < 3){
        okay = false;
        alert("Please enter a username with 3 or more characters");
    }
    else if(accPass.length < 8){
        okay = false;
        alert("Please enter a password with 8 or more characters");
    }
    else{
        if (typeof(Storage) !== "undefined") {
            sessionStorage.setItem(accName, accPass);
        } 
        else {
            console.log("Sorry, your browser does not support Web Storage...");
        }
    }

    return okay;
}