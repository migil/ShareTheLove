
var Me ={
  myFirstName : "Joe",
  myLastName : "Schmoe",
  myPicture : "pix/defaultProfile.jpg",
  myHome : "home.html",
  myProfile : "myProfile.html",
  myEmail : "Rando@email.com",
  myPhone : "(no)sue-number",
  myFB : "fb.com/lbj",
  myItems : "soccer ball tape beer",
  myGroups : "Village East 1, Village East 2"
};
  
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

var comments = [
  "Joe: Hello",
  "Nico: konichiwa",
  "Joe: me borrow tape",
  "Nico: Hai Hai"
]; 

function startUp(){
  comments.forEach(autoCreateComment);
  setOtherInfo();

  var myImg = document.getElementById("profileImage");
  myImg.src = "pix/defaultProfile.jpg";
  myImg.alt = "pix/random.jpeg";
};

function setOtherInfo(){
  var otherImg = document.getElementById("otherProfile");
  otherImg.src = "pix/otherProfile.jpg";
  otherImg.alt = "pix/random.jpeg";

  var para = document.getElementById("otherItem");
  var node = document.createTextNode("Tape");
  para.appendChild(node);

  para = document.getElementById("otherOwner");
  node = document.createTextNode(Other.otherFirstName);
  para.appendChild(node);

  para = document.getElementById("otherEmail");
  node = document.createTextNode(Other.otherEmail);
  para.appendChild(node);

  para = document.getElementById("otherPhone");
  node = document.createTextNode(Other.otherPhone);
  para.appendChild(node);


}

function autoCreateComment(item, index, arr){

  var para = document.createElement("p");
  para.className="comments";
  var node = document.createTextNode(item);
  para.appendChild(node);

  var getDiv = document.getElementById("commentsSection");
  getDiv.appendChild(para);
};

window.onload = function(){
  startUp();
}



function profilePress() {
    //document.getElementById("profileDropDown").classList.toggle("show");
    //document.getElementById("test").innerHTML = "New text!";
    window.location.href = "myProfile.html";
};
function logoutPress(){
  window.location.href = "signIn.html";
};
function homePress(){
    window.location.href = "home.html";
};

function submitCommentPress(){
  var comment = document.getElementById("commentText").value;

  var para = document.createElement("p");
  para.className="comments";

  var node = document.createTextNode(Me.myFirstName + ": " + comment);
  para.appendChild(node);

  var getDiv = document.getElementById("commentsSection");
  getDiv.appendChild(para);
};



/*
window.onclick = function(event) {
    if (!event.target.matches('.profileImageClass')) {
  
      var dropdowns = document.getElementsByClassName("dropDownContent");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  */