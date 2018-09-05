//define functions here
function getIt() {
  $('p').on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on("load", function() {
    $('img').addClass("tasty");
  });
}

function submitIt() {
  
}

function pressIt() {
  
}


$(document).ready(function(){

// call functions here
getIt();
frameIt();
submitIt();
pressIt();

});
