//When the user clicks on the button toggle between hiding and showing the dropdown content 

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//Close the dropdown if the user clicks outside of it

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



// Right button disabled to prevent from dowloading images

function nocontext(e) {
  var clickedTag = (e==null) ? event.srcElement.tagName : e.target.tagName;
  if (clickedTag == "IMG")
    return false;
}
document.oncontextmenu = nocontext;


