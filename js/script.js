var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var max = document.getElementById("max");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate begin with letter
  var beginWithLetter = /[a-z,A-Z]/;
  if(myInput.value.match (beginWithLetter)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate max length
  
  if(myInput.value.length <= 20) {
    max.classList.remove("invalid");
    max.classList.add("valid");
  } else {
    max.classList.remove("valid");
    max.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 6) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}