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
