
function homePress(){
    window.location.href = "home.html";
}

function profilePress() {
    window.location.href = "myProfile.html";
}


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

var groupElem = ["Village East 1", "Village West 2", "Village East 3", "Village West 4"];
var groupList = [
  "Village East 1",
  "Village West 3",
  "Warren Reshall 4",
  "UCSD Tennis Group",
  "UCSD CSE Nerds",
  "Anime Group"
];

var feedList = [
  "Justin Gil checked out Wayne Rooney's glue stick",
  "Leo Qiu checked out Bruno Mars's glue stick",
  "Derrick Wong checked out Minooc Choo's glue stick",
  "Scott Chen checked out Jason Hwang's glue stick",
  "Michael Cheng checked out Issac's macbook charger",
];

function startUp(){
  groupList.forEach(createGroups);
  feedList.forEach(createFeeds);
};

function createFeeds(item, index, arr){
  var para = document.createElement("p");
  para.className ="activityElem";
  var node = document.createTextNode(item);
  para.appendChild(node);
  var getDiv = document.getElementById("activityColumn");
  getDiv.appendChild(para);
};

function createGroups(item, index, arr){
  var para = document.createElement("a");
  para.className="button";
  para.href="items.html"
  var node = document.createTextNode(item);
  para.appendChild(node);
  var getDiv = document.getElementById("groupList");
  getDiv.appendChild(para);
};
