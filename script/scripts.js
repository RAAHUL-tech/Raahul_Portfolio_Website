window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

document.getElementById("myButton1").onclick = function () {
  location.href = "#about";
};
document.getElementById("myButton2").onclick = function () {
  location.href = "https://github.com/RAAHUL-tech/Bus-reservation-system";
};
document.getElementById("myButton3").onclick = function () {
  location.href = "https://github.com/RAAHUL-tech/Online-banking-system";
};
document.getElementById("myButton4").onclick = function () {
  location.href = "https://github.com/RAAHUL-tech/1-1-messenging-app";
};
document.getElementById("myButton5").onclick = function () {
  location.href = "https://github.com/RAAHUL-tech/Hospital-Management-System";
};
document.getElementById("myButton6").onclick = function () {
  location.href = "https://github.com/RAAHUL-tech/Hospital-Management-System";
};
document.getElementById("myButton7").onclick = function () {
  location.href = "https://github.com/RAAHUL-tech/Movie_recommendation_System";
};
document.getElementById("myButton8").onclick = function () {
  location.href = "https://github.com/RAAHUL-tech/Face-Emotion-Recognition";
};
document.getElementById("myButton9").onclick = function () {
  location.href = "https://github.com/RAAHUL-tech/DATON";
};
document.getElementById("myButton10").onclick = function () {
  location.href = "https://github.com/RAAHUL-tech/Neural-Style-Transfer";
};
document.getElementById("myButton11").onclick = function () {
  location.href = "https://github.com/RAAHUL-tech/Banking-Website";
};
document.getElementById("myButton12").onclick = function () {
  location.href = "https://github.com/RAAHUL-tech/Electronic-Shop";
};
document.getElementById("myButton13").onclick = function () {
  location.href = "https://www.linkedin.com/in/raahulkrishna/";
};
document.getElementById("myButton14").onclick = function () {
  location.href = "instagram.";
};
document.getElementById("myButton15").onclick = function () {
  location.href = "https://twitter.com/home";
};
document.getElementById("myButton16").onclick = function () {
  location.href = "https://github.com/RAAHUL-tech/";
};
document.getElementById("myButton17").onclick = function () {
  location.href = "https://www.linkedin.com/in/raahulkrishna/";
};
document.getElementById("myButton18").onclick = function () {
  location.href = "https://www.ijcrt.org/viewfull.php?&p_id=IJCRT2309456";
};



$(function(){  
  $('.monster').fadeIn('slow');
});

$(document).ready(function() {
    $(window).scroll( function(){
    
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
        }); 
    
    });
    
});
