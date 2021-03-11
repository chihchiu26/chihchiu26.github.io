$(document).ready(function () {
  $("#includedContent").load("projectList.html"); 
    $('.burgermenu').on('click', function () {
        $('.projectList').slideToggle('fast');
    });

    
    var texts = document.querySelectorAll('.projectItems a');
    [].slice.call(document.querySelectorAll('.thumbnailGrid a')).forEach(function (a, i){
        a.onmouseover = function () {
            texts[i].style = "color: #333333 ; text-decoration:underline"
        }
        a.onmouseout = function () {
            texts[i].style = ""
        }        
    })

});


var x = window.matchMedia("(max-width: 992px)")
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (x.matches){
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }

  prevScrollpos = currentScrollPos;
}
}

