$(document).ready(function () {
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
