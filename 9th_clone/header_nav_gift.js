function openNav() {
document.getElementById("mobile_navi_ham").style.display ="none";
document.getElementById("mobile_navi_clo").style.display ="block";
document.getElementById("bottom_navi").style.width ="110%";

}

function closeNav() {
document.getElementById("mobile_navi_ham").style.display ="block";
document.getElementById("mobile_navi_clo").style.display ="none";
document.getElementById("bottom_navi").style.width ="0%";
}

$("p.title").on('click', function() {
    $(this).next(".con").slideToggle(100);
});

$("span.title_").on('click', function() {
    $(this).next(".con").slideToggle(100);
});

