function profilePress() {
    window.location.href = "myProfile.html";
}

function logoutPress(){
  window.location.href = "signIn.html";
}


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


var members = [
  "Justin Gil",
  "Scott Chen",
  "Michael Cheng",
  "Derrick Wong"
]; 

var itemList = [
	"Tape (Scott)",
	"Post it (Michael)",
	"Rice cooker (Brandon)",
	"HDMI (Chris)",
	"Screw driver (Justin)",
	"Vacuum cleaner (Leo)"
];


function startUp(){
	members.forEach(createMembers);
	itemList.forEach(createItems);
};


function createMembers(item, index, arr){
  var para = document.createElement("p");
  para.className="memberElem";
  var node = document.createTextNode(item);
  para.appendChild(node);
  var getDiv = document.getElementById("membersDiv");
  getDiv.appendChild(para);
};

function createItems(item, index, arr){
  var para = document.createElement("a");
  para.className="button";
  para.href="itemComments.html"
  var node = document.createTextNode(item);
  para.appendChild(node);
  var getDiv = document.getElementById("itemList");
  getDiv.appendChild(para);
};

window.onload = function(){
  startUp();
}
