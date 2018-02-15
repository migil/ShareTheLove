
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



function startUp(){
  setFeed();
  setGroups();
};

function setFeed(){
  var para = document.getElementById("feed1");
  var node = document.createTextNode("Justin Gil checked out Wayne Rooney's glue stick");
  para.appendChild(node);

  para = document.getElementById("feed2");
  node = document.createTextNode("Leo Qiu checked out Bruno Mars's glue stick");
  para.appendChild(node);

  para = document.getElementById("feed3");
  node = document.createTextNode("Derrick Wong checked out Minooc Choo's glue stick");
  para.appendChild(node);

  para = document.getElementById("feed4");
  node = document.createTextNode("Scott Chen checked out Jason Hwang's glue stick");
  para.appendChild(node);
}

function setGroups(){
  var para = document.getElementById("groupElem1");
  var node = document.createTextNode(groupElem[0]);
  para.appendChild(node);

  para = document.getElementById("groupElem2");
  node = document.createTextNode(groupElem[1]);
  para.appendChild(node);

  para = document.getElementById("groupElem3");
  node = document.createTextNode(groupElem[2]);
  para.appendChild(node);

  para = document.getElementById("groupElem4");
  node = document.createTextNode(groupElem[3]);
  para.appendChild(node);
}