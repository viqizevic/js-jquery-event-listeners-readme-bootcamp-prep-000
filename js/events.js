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
  $('input').on('keydown', function() {
    if (key.which == 71) {
      alert('g was pressed!');
    }
  });
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
