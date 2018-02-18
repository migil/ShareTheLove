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
  Me.feedList.forEach(createFeeds);
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
   ~~~~~~~~~~~~~ Routing: Navigating to different pages ~~~~~~~~~~~~~~~~~~~~~~~~
*/
function homePress(){
  document.getElementById("home_page").style.display = "inline";

  // hide all other pages
  document.getElementById("myProfile_page").style.display = "none";
  document.getElementById("items_page").style.display = "none";
  document.getElementById("itemComments_page").style.display = "none";
}

function profilePress() {
  document.getElementById("myProfile_page").style.display = "inline";
  startUpMyProfilePage();

  // hide all other pages
  document.getElementById("home_page").style.display = "none";
  document.getElementById("items_page").style.display = "none";
  document.getElementById("itemComments_page").style.display = "none";
}

function groupPress() {
  document.getElementById("items_page").style.display = "inline";
  startUpItemsPage();

  // hide all other pages
  document.getElementById("home_page").style.display = "none";
  document.getElementById("myProfile_page").style.display = "none";
  document.getElementById("itemComments_page").style.display = "none";
}

function itemPress() {
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

var setProfileFlag = false;
// *********************************************************************************
//***************************  myProfile.html   ************************************
// *********************************************************************************

/*
   ~~~~~~~~~~~~~~~~ Loads profile info for myProfile.html ~~~~~~~~~~~~~~~~
*/
function startUpMyProfilePage() {

  //delete group list
  var groupFetchList = document.getElementsByClassName("contactInfoGroup");
  for(var i = groupFetchList.length - 1; 0 <= i; i--){
    if(groupFetchList[i] && groupFetchList[i].parentElement)
      groupFetchList[i].parentElement.removeChild(groupFetchList[i]);
  }

  groupFetchList = document.getElementsByClassName("contactInfoItem");
  for(var i = groupFetchList.length - 1; 0 <= i; i--){
    if(groupFetchList[i] && groupFetchList[i].parentElement)
      groupFetchList[i].parentElement.removeChild(groupFetchList[i]);
  }

  Me.myItemList.forEach(autoCreateItems);
  Me.myGroupList.forEach(autoCreateGroups);

  if (!setProfileFlag) {
    setOtherInfoMyProfilePage();
    setProfileFlag = true;
  }

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
    itemButtonColorToggle(para, para.id);
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
  var node = document.createTextNode(Me.firstName + " " + Me.lastName);
  para.appendChild(node);

  para = document.getElementById("profileEmail");
  node = document.createTextNode(Me.email);
  para.appendChild(node);

  para = document.getElementById("profilePhone");
  node = document.createTextNode(Me.phone);
  para.appendChild(node);

  para = document.getElementById("profileFacebook");
  node = document.createTextNode(Me.facebook);
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
  para.onclick = function() {
    itemButtonColorToggle(para, para.id);
  }
  counter += 1;

  para.appendChild(node);

  var getDiv = document.getElementById("itemSection");
  getDiv.appendChild(para);

  // update Me's list of items
  Me.myItemList.push(newItem);

  // for each group Me is in, their item list must be updated as well
  for (var i = 0; i < Me.myGroupList.length; i++) {
    // grab the freaking group object
    groupMap[Me.myGroupList[i]].groupItemList.push(newItem);
  }
}

function itemButtonColorToggle(elem, id) {

  if (elem.style.backgroundColor == "rgb(234, 231, 220)" || elem.style.backgroundColor == "") {
    elem.style.backgroundColor = "red";
  } else {
    elem.style.backgroundColor = "rgb(234, 231, 220)";
    //document.getElementById(id).classList.add("enabledItemButton");
  }
}


// *********************************************************************************
//******************************  items.html   *************************************
// *********************************************************************************
var memberDiv;
var itemDiv;
var memList;
var itemFetchList;
var groupNameTitle;
var titleItem;

function startUpItemsPage(){
  memList = document.getElementsByClassName("memberElem");
  memberDiv = document.getElementById("membersDiv");
  itemDiv = document.getElementById("itemDiv");
  itemFetchList = document.getElementsByClassName("button items");
  titleItem = document.getElementById("groupTitle");

  //delete item list
  for(var i = itemFetchList.length - 1; 0 <= i; i--){
    if(itemFetchList[i] && itemFetchList[i].parentElement)
      itemFetchList[i].parentElement.removeChild(itemFetchList[i]);
  }
  //delte member list
  for(var i = memList.length - 1; 0 <= i; i--){
    if(memList[i] && memList[i].parentElement)
      memList[i].parentElement.removeChild(memList[i]);
  }

  VilEast1.memberList.forEach(createMembers);
  VilEast1.groupItemList.forEach(createItems);

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


//DEBUG JUSTIN PLZ
function createItems(item, index, arr) {
  var para = document.createElement("a");
  para.className="button items";
  para.onclick = function() {
    itemPress();
  }
  para.id="itemElemId";

  var myItem = false;
  if(Me.myItemList.indexOf(item) > -1){
    para.style.color = "ORANGE";
    myItem = true;
    item = item + " (my item)";
  }

  var node = document.createTextNode(item);

  para.appendChild(node);
  itemDiv.appendChild(para);
};

function displayCurrentGroup() {
  if(!titleItem.hasChildNodes()){  
    groupNameTitle = document.createElement("p");
    groupNameTitle.className = "columnTitle";
    var node = document.createTextNode("Village East 1");
    groupNameTitle.appendChild(node);
    var getDiv = document.getElementById("groupTitle");
    getDiv.appendChild(groupNameTitle);
  }
}

function joinToggle(checkbox) {
    //toggle on
    if (!checkbox.checked){
        var groupName = titleItem.childNodes[0].innerHTML;
        Me.myGroupList.push(groupName);

        for(var i = memList.length - 1; 0 <= i; i--){
          if(memList[i] && memList[i].parentElement)
            memList[i].parentElement.removeChild(memList[i]);
        }

        VilEast1.memberList.push(Me.fullName);
        VilEast1.memberList.forEach(createMembers);

        for(var i = itemFetchList.length - 1; 0 <= i; i--){
          if(itemFetchList[i] && itemFetchList[i].parentElement)
            itemFetchList[i].parentElement.removeChild(itemFetchList[i]);
        }

        for(var i = 0; i < Me.myItemList.length; i++){
          var myItemToAdd = Me.myItemList[i];
          VilEast1.groupItemList.push(myItemToAdd);
        }
        VilEast1.groupItemList.forEach(createItems);

    }
    //toggle off
    else{
      var groupName = titleItem.childNodes[0].innerHTML;
      Me.myGroupList.splice(Me.myGroupList.indexOf(groupName), 1)
      //clear the memList
        for(var i = memList.length - 1; 0 <= i; i--){
          if(memList[i] && memList[i].parentElement)
            memList[i].parentElement.removeChild(memList[i]);
        }

        //cut off the my name from the meemberArray
        VilEast1.memberList.splice(VilEast1.memberList.indexOf(Me.fullName), 1);
        VilEast1.memberList.forEach(createMembers);


        //clear all thes item from the displayList
        for(var i = itemFetchList.length - 1; 0 <= i; i--){
          if(itemFetchList[i] && itemFetchList[i].parentElement)
            itemFetchList[i].parentElement.removeChild(itemFetchList[i]);
        }
        //remove my items from itemListArray
        for(var i = 0; i < Me.myItemList.length; i++){
          VilEast1.groupItemList.splice(VilEast1.groupItemList.indexOf(Me.myItemList[i]), 1);
        }
        VilEast1.groupItemList.forEach(createItems);
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

