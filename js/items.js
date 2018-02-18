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
  myGroups : "Village East 1, Village East 2",
  fullName : "Joe Schmoe"
};

var myItemsList = new Array(
  "Soccer ball",
  "Tape",
  "Beers"
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


var memberDiv;
var itemDiv;
var memList;
var itemListByClass;

function startUp(){
  memList = document.getElementsByClassName("memberElem");
  memberDiv = document.getElementById("membersDiv");
  itemDiv = document.getElementById("itemDiv");
  itemFetchList = document.getElementsByClassName("button items");

	membersArray.forEach(createMembers);
	itemListArray.forEach(createItems);
  displayCurrentGroup();
};


function createMembers(item, index, arr){
  var para = document.createElement("p");
  para.className="memberElem";
  var node = document.createTextNode(item);
  
  if(item == Me.fullName){
    para.style.color = "#E85A4F";
  }

  para.appendChild(node);
  memberDiv.appendChild(para);
};

function createItems(item, index, arr){
  var para = document.createElement("a");
  para.className="button items";
  para.href="itemComments.html";
  para.id="itemElemId";

  var myItem = false;
  if(myItemsList.indexOf(item) > -1){
    para.style.color = "ORANGE";
    myItem = true;
    item = item + " (my item)";
  }

  var node = document.createTextNode(item);


  para.appendChild(node);
  itemDiv.appendChild(para);
};

function displayCurrentGroup(){
  var para = document.createElement("p");
  para.className = "columnTitle";
  var node = document.createTextNode("Village East 1");
  para.appendChild(node);
  var getDiv = document.getElementById("groupTitle");
  getDiv.appendChild(para);
}

window.onload = function(){
  startUp();
}

function joinToggle(checkbox)
{
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
        
        for(var i = 0; i < myItemsList.length; i++){
          var myItemToAdd = myItemsList[i];
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
        for(var i = 0; i < myItemsList.length; i++){
          itemListArray.splice(itemListArray.indexOf(myItemsList[i]), 1);
        }
        itemListArray.forEach(createItems);
    }
}



//issue 1) join state shuold be checked when a user clicks a group
//issue 2) alien toggle button -> 




