function showMessage() {
  var message = document.getElementById("message");
  var div = document.getElementById("popup");

  div.style.display = "block";
  message.innerHTML = "This is a pop-up message box.";
}

var button = document.getElementById("button");
button.onclick = showMessage;
