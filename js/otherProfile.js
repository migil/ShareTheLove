var Other ={
    otherFirstName : "Nico",
    otherLastName : "Nico",
    otherPicture : "pix/otherProfile.jpg",
    otherHome : "home.html",
    otherProfile : "otherProfile.html",
    otherEmail : "Rando@email.com",
    otherPhone : "(no)sue-number",
    otherFB : "fb.com/lbj",
    otherItems : "soccer ball tape beer",
    otherGroups : "Village East 1, Village East 2"
  };


function startUp(){
    setOtherInfo();
};
  
  function setOtherInfo(){
    var otherImg = document.getElementById("otherProfile");
    otherImg.src = "pix/otherProfile.jpg";
    otherImg.alt = "pix/random.jpeg";

    var para = document.getElementById("otherPerson");
    var node = document.createTextNode(Other.otherFirstName + " " 
    + Other.otherLastName);
    para.appendChild(node);
  
    para = document.getElementById("otherItems");
    node = document.createTextNode(Other.otherItems);
    para.appendChild(node);
  
    para = document.getElementById("otherEmail");
    node = document.createTextNode(Other.otherEmail);
    para.appendChild(node);
  
    para = document.getElementById("otherPhone");
    node = document.createTextNode(Other.otherPhone);
    para.appendChild(node);

    para = document.getElementById("otherFB");
    node = document.createTextNode(Other.otherFB);
    para.appendChild(node);
  }
  
  window.onload = function(){
    startUp();
  }
  

function logoutPress(){
    window.location.href = "signIn.html";
}

function homePress(){
    window.location.href = "home.html";
}

function profilePress() {
    window.location.href = "myProfile.html";
}