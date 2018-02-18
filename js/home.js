
/*
   ~~~~~~~~~~~~~~~~~~~~~~~~ Data ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

class UserProfile {
  constructor(firstName, lastName, picture, email, phoneNumber, facebook, myItemList, myGroupList, feedList) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.picture = picture;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.facebook = facebook;
    this.myItemList = myItemList;
    this.myGroupList = myGroupList;
    this.feedList = feedList;
    this.fullName = firstName + " " + lastName;
  }
}

class Group{
  constructor(memberList, groupItemList){
    this.memberList = memberList;
    this.groupItemList = groupItemList;
  }
}

//each user materials
var tempItemList = new Array ("Tape, Soccer Ball, Nuclear missle");
var tempGroupList = new Array ("Village East 1", "Village East 2");
var tempFeedList  = new Array (
  "Justin Gil checked out Wayne Rooney's glue stick",
  "Leo Qiu checked out Bruno Mars's glue stick",
  "Derrick Wong checked out Minooc Choo's glue stick",
  "Scott Chen checked out Jason Hwang's glue stick",
  "Michael Cheng checked out Issac's macbook charger",
);

//each group materials
var tempMemberList = new Array("Justin Gil", "Scott Chen", "Michael Cheng", "Derrick Wong");
var tempGroupItemList = new Array("Tape", "Post it", "Rice cooker", "HDMI", "Screw driver","Vacuum cleaner");

var tempMemberList2 = new Array("Derrick Wong", "Scott Chen", "Michael Cheng", "Derrick Wong");
var tempGroupItemList2 = new Array("Tape", "Post it", "iPhone X", "desktop", "Screw driver","Vacuum cleaner");

//UserProfiles
var Me = new UserProfile("Joe", "Schmoe", "pix/defaultProfile.jpg", "Rando@email.com", "(393)992-3142", "fb.com/fjnf", tempItemList, tempGroupList, tempFeedList);
var Derrick = new UserProfile("Derrick", "Wong", "pix/defaultProfile.jpg", "Rando@email.com", "(393)992-3142", "fb.com/fjnf", tempItemList, tempGroupList, tempFeedList);
var Jason = new UserProfile("Jason", "Jiajun", "pix/defaultProfile.jpg", "Rando@email.com", "(393)992-3142", "fb.com/fjnf", tempItemList, tempGroupList, tempFeedList);
var Leo = new UserProfile("Leo", "Qiu", "pix/defaultProfile.jpg", "Rando@email.com", "(393)992-3142", "fb.com/fjnf", tempItemList, tempGroupList, tempFeedList);
var Scott = new UserProfile("Scott", "Chen", "pix/defaultProfile.jpg", "Rando@email.com", "(393)992-3142", "fb.com/fjnf", tempItemList, tempGroupList, tempFeedList);

//GroupProfile
var VilEast1 = new Group (tempMemberList, tempGroupItemList);
var VilWast2 = new Group (tempMemberList2, tempGroupItemList2);

var groupList = new Array(
  "Village East 1",
  "Village West 3",
  "Warren Reshall 4",
  "UCSD Tennis Group",
  "UCSD CSE Nerds",
  "Anime Group"
);

var Me = {
  myFirstName : "Joe",
  myLastName : "Schmoe",
  myPicture : "pix/defaultProfile.jpg",
  myHome : "home.html",
  myProfile : "myProfile.html",
  myEmail : "Rando@email.com",
  myPhone : "(no)sue-number",
  myFB : "fb.com/lbj",
  myItems : "soccer ball tape beer",
  fullName : "Joe Schmoe",
  myItemsList : new Array(
    "Soccer ball",
    "Tape",
    "Beers"
  ),
  myGroupList : new Array(
    "Village East 1",
    "Village East 2"
  )
};

var feedList = new Array(
  "Justin Gil checked out Wayne Rooney's glue stick",
  "Leo Qiu checked out Bruno Mars's glue stick",
  "Derrick Wong checked out Minooc Choo's glue stick",
  "Scott Chen checked out Jason Hwang's glue stick",
  "Michael Cheng checked out Issac's macbook charger",
);

var membersArray = new Array (
  "Justin Gil",
  "Scott Chen",
  "Michael Cheng",
  "Derrick Wong"
);

var itemListArray = new Array (
  "Tape (Scott)",
  "Post it (Michael)",
  "Rice cooker (Brandon)",
  "HDMI (Chris)",
  "Screw driver (Justin)",
  "Vacuum cleaner (Leo)"
);

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


/*
   ~~~~~~~~~~~~~~~~ ENTRY POINT: for loading everything ~~~~~~~~~~~~~~~~
*/
window.onload = function() {
  startUpHomePage();
  startUpMyProfilePage();
  startUpItemsPage();
  startUpItemCommentsPage();
}


// *********************************************************************************
//***************************  Home.html   *****************************************
// *********************************************************************************

function startUpHomePage() {
  groupList.forEach(createGroups);
  feedList.forEach(createFeeds);
}

/*
   ~~~~~~~~~~~~~~~~ Loads Groups & Comment Feed for home.html ~~~~~~~~~~~~~~~~
*/
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
  para.onclick = function() {
    groupPress();
  }
  var node = document.createTextNode(item);
  para.appendChild(node);
  var getDiv = document.getElementById("groupList");
  getDiv.appendChild(para);
};


/*
   ~~~~~~~~~~~~~ Navigating to different pages ~~~~~~~~~~~~~~~~~~~~~~~~
*/
function homePress(){
  console.log("to home page!");
  document.getElementById("home_page").style.display = "inline";

  // hide all other pages
  document.getElementById("myProfile_page").style.display = "none";
  document.getElementById("items_page").style.display = "none";
  document.getElementById("itemComments_page").style.display = "none";
}

function profilePress() {
  console.log("to profile page!");
  document.getElementById("myProfile_page").style.display = "inline";

  // hide all other pages
  document.getElementById("home_page").style.display = "none";
  document.getElementById("items_page").style.display = "none";
  document.getElementById("itemComments_page").style.display = "none";
}

function groupPress() {
  console.log("to group page!");
  document.getElementById("items_page").style.display = "inline";

  // hide all other pages
  document.getElementById("home_page").style.display = "none";
  document.getElementById("myProfile_page").style.display = "none";
  document.getElementById("itemComments_page").style.display = "none";
}

function itemPress() {
  console.log("to item comments page!");
  document.getElementById("itemComments_page").style.display = "inline";

  // hide all other pages
  document.getElementById("home_page").style.display = "none";
  document.getElementById("myProfile_page").style.display = "none";
  document.getElementById("items_page").style.display = "none";
}

function logoutPress() {
  window.location.href = "signIn.html";
};


/*
  ~~~~~~~~~~~~~~~~~~~~~~~ Dropdown Menu ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
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


// *********************************************************************************
//***************************  myProfile.html   ************************************
// *********************************************************************************

/*
   ~~~~~~~~~~~~~~~~ Loads profile info for myProfile.html ~~~~~~~~~~~~~~~~
*/
function startUpMyProfilePage() {
  Me.myItemsList.forEach(autoCreateItems);
  Me.myGroupList.forEach(autoCreateGroups);
  setOtherInfoMyProfilePage();

  var myImg = document.getElementById("profileImage");
  myImg.src = "pix/defaultProfile.jpg";
  myImg.alt = "pix/random.jpeg";
};

var counter= 1;
function autoCreateItems(item, index, arr) {
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

function setOtherInfoMyProfilePage() {
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

/*
   ~~~~~~~~~~~~~~~~ Add new item to myProfile.html! ~~~~~~~~~~~~~~~~
*/
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



// *********************************************************************************
//******************************  items.html   *************************************
// *********************************************************************************
var memberDiv;
var itemDiv;
var memList;
var itemListByClass;

function startUpItemsPage(){
  memList = document.getElementsByClassName("memberElem");
  memberDiv = document.getElementById("membersDiv");
  itemDiv = document.getElementById("itemDiv");
  itemFetchList = document.getElementsByClassName("button items");

  membersArray.forEach(createMembers);
  itemListArray.forEach(createItems);
  displayCurrentGroup();
};

function createMembers(item, index, arr) {
  var para = document.createElement("p");
  para.className="memberElem";
  var node = document.createTextNode(item);

  if(item == Me.fullName){
    para.style.color = "#E85A4F";
  }

  para.appendChild(node);
  memberDiv.appendChild(para);
};

function createItems(item, index, arr) {
  var para = document.createElement("a");
  para.className="button items";
  para.onclick = function() {
    itemPress();
  }
  para.id="itemElemId";

  var myItem = false;
  if(Me.myItemsList.indexOf(item) > -1){
    para.style.color = "ORANGE";
    myItem = true;
    item = item + " (my item)";
  }

  var node = document.createTextNode(item);

  para.appendChild(node);
  itemDiv.appendChild(para);
};

function displayCurrentGroup() {
  var para = document.createElement("p");
  para.className = "columnTitle";
  var node = document.createTextNode("Village East 1");
  para.appendChild(node);
  var getDiv = document.getElementById("groupTitle");
  getDiv.appendChild(para);
}


function joinToggle(checkbox) {
    //toggle on
    if (!checkbox.checked){

        for(var i = memList.length - 1; 0 <= i; i--){
          if(memList[i] && memList[i].parentElement)
            memList[i].parentElement.removeChild(memList[i]);
        }

        membersArray.push(Me.fullName);
        membersArray.forEach(createMembers);

        for(var i = itemFetchList.length - 1; 0 <= i; i--){
          if(itemFetchList[i] && itemFetchList[i].parentElement)
            itemFetchList[i].parentElement.removeChild(itemFetchList[i]);
        }

        for(var i = 0; i < Me.myItemsList.length; i++){
          var myItemToAdd = Me.myItemsList[i];
          itemListArray.push(myItemToAdd);
        }
        itemListArray.forEach(createItems);

    }
    //toggle off
    else{
      //clear the memList
        for(var i = memList.length - 1; 0 <= i; i--){
          if(memList[i] && memList[i].parentElement)
            memList[i].parentElement.removeChild(memList[i]);
        }

        //cut off the my name from the meemberArray
        membersArray.splice(membersArray.indexOf(Me.fullName), 1);
        membersArray.forEach(createMembers);


        //clear all thes item from the displayList
        for(var i = itemFetchList.length - 1; 0 <= i; i--){
          if(itemFetchList[i] && itemFetchList[i].parentElement)
            itemFetchList[i].parentElement.removeChild(itemFetchList[i]);
        }
        //remove my items from itemListArray
        for(var i = 0; i < Me.myItemsList.length; i++){
          itemListArray.splice(itemListArray.indexOf(Me.myItemsList[i]), 1);
        }
        itemListArray.forEach(createItems);
    }
}


// *********************************************************************************
//******************************  itemComments.html   ******************************
// *********************************************************************************
function startUpItemCommentsPage() {
  comments.forEach(autoCreateComment);
  setOtherInfoItemCommentsPage();

  var myImg = document.getElementById("profileImage");
  myImg.src = "pix/defaultProfile.jpg";
  myImg.alt = "pix/random.jpeg";
}

function setOtherInfoItemCommentsPage() {
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

function autoCreateComment(item, index, arr) {
  var para = document.createElement("p");
  para.className="comments";
  var node = document.createTextNode(item);
  para.appendChild(node);

  var getDiv = document.getElementById("commentsSection");
  getDiv.appendChild(para);
};


function submitCommentPress() {
  var comment = document.getElementById("commentText").value;

  var para = document.createElement("p");
  para.className="comments";

  var node = document.createTextNode(Me.myFirstName + ": " + comment);
  para.appendChild(node);

  var getDiv = document.getElementById("commentsSection");
  getDiv.appendChild(para);
}













