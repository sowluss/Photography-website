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
  var clickedTag = (e == null) ? event.srcElement.tagName : e.target.tagName;
  if (clickedTag == "IMG")
    return false;
}
document.oncontextmenu = nocontext;


//  Navigation bar transparency changes when scrolling  

var scroll_transparency = false;

$(window).scroll(function() {

  if ($(window).scrollTop() == 0) {
    scroll_transparency = false;
    $('div#header').fadeTo("fast", 1);

  } else {
    if (scroll_transparency == false) {
      $('div#header').fadeTo("fast", .8);
      scroll_transparency = true;
    }
  }
});

//  MOBILE SIDEBAR

$(document).ready(function() {
  $('.sidebar-btn').click(function() {
    $('.mobile-sidebar').toggleClass('active');
    $('.sidebar-btn').toggleClass('toggle');
  })
})
 