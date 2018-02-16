
var Me ={
  myFirstName : "Joe",
  myLastName : "Schmoe",
  myPicture : "pix/defaultProfile.jpg",
  myHome : "home.html",
  myProfile : "myProfile.html",
  myEmail : "Rando@email.com",
  myPhone : "(no)sue-number",
  myFB : "fb.com/lbj",
  myItems : "soccer ball, tape, beer",
  myGroups : "Village East 1, Village East 2"
};

var items = [
  "soccer ball",
  "tape",
  "beer"
]

var groups = [
  "Village East 1",
  "Village East 2"
]


window.onload = function(){
  startUp();
}

function startUp(){
  items.forEach(autoCreateItems);
  groups.forEach(autoCreateGroups);
  setOtherInfo();

  var myImg = document.getElementById("profileImage");
  myImg.src = "pix/defaultProfile.jpg";
  myImg.alt = "pix/random.jpeg";
};

var counter= 1;
function autoCreateItems(item, index, arr){
  var para = document.createElement("button");
  para.className="contactInfoItem";

  para.id = "item_button_" + counter;
  //para.onclick = toggle(para.id);
  para.onclick = function() {

    if (para.style.backgroundColor == "rgb(234, 231, 220)" || para.style.backgroundColor == "") {
      para.style.backgroundColor = "red";
    } else {
      para.style.backgroundColor = "rgb(234, 231, 220)";
    }

    console.log(para.style.backgroundColor);
    console.log(para.style.color);
  }
  counter += 1;

  var node = document.createTextNode(item);
  para.appendChild(node);

  var getDiv = document.getElementById("itemSection");
  getDiv.appendChild(para);
}

/*
function toggle(wtf) {
  console.log("wtf");
  console.log(wtf);
  var textColor = document.getElementById(wtf).style.color;
  if (textColor == "#555") {
      document.getElementById(id).style.background = "red";
  } else {
      document.getElementById(id).style.background = "rgba(204, 201, 190, 1)";
  }
}*/

function autoCreateGroups(item, index, arr) {
  // create p tag
  var para = document.createElement("p");
  // add class to p tag
  para.className = "contactInfoGroup";
  // add text to the tag
  var node = document.createTextNode(item);
  para.appendChild(node);

  var myDiv = document.getElementById("profileGroups");
  myDiv.appendChild(para);
}

function setOtherInfo(){
  var otherImg = document.getElementById("profilePic");
  otherImg.src = "pix/defaultProfile.jpg";
  otherImg.alt = "pix/random.jpeg";

  var para = document.getElementById("profileName");
  var node = document.createTextNode(Me.myFirstName + " " + Me.myLastName);
  para.appendChild(node);

  para = document.getElementById("profileEmail");
  node = document.createTextNode(Me.myEmail);
  para.appendChild(node);

  para = document.getElementById("profilePhone");
  node = document.createTextNode(Me.myPhone);
  para.appendChild(node);

  para = document.getElementById("profileFacebook");
  node = document.createTextNode(Me.myFB);
  para.appendChild(node);
}

function addItem() {
  var addItemButton = document.getElementById("addItemButton");
  addItemButton.style.display = "none";

  var submitItemButton = document.getElementById("submitItemButton");
  submitItemButton.style.display = "inline";

  var newItemText = document.getElementById("newItemText");
  newItemText.style.display = "inline";
}

function submitItem() {
  var submitItemButton = document.getElementById("submitItemButton");
  submitItemButton.style.display = "none";

  var newItemText = document.getElementById("newItemText");
  newItemText.style.display = "none";

  var addItemButton = document.getElementById("addItemButton");
  addItemButton.style.display = "inline";

  var newItem = document.getElementById("newItemText").value;
  var node = document.createTextNode(newItem);

  var para = document.createElement("button");
  para.className="contactInfoItem";
  para.id = "item_button_" + counter;
  counter += 1;

  para.appendChild(node);

  var getDiv = document.getElementById("itemSection");
  getDiv.appendChild(para);
}


function profilePress() {
    //document.getElementById("profileDropDown").classList.toggle("show");
    //document.getElementById("test").innerHTML = "New text!";
    window.location.href = "myProfile.html";
}
function logoutPress(){
  window.location.href = "signIn.html";
}
function homePress(){
    window.location.href = "home.html";
}

function submitCommentPress(){
  var comment = document.getElementById("commentText").value;

  var para = document.createElement("p");
  para.className="comments";

  var node = document.createTextNode(Me.myFirstName + ": " + comment);
  para.appendChild(node);

  var getDiv = document.getElementById("commentsSection");
  getDiv.appendChild(para);
}



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