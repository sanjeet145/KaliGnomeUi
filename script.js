//terminal
const commandInput = document.getElementById("commandInput");
const contentElement = document.getElementById("content");

commandInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const command = commandInput.value;
    printInput(command);
    executeCommand(command);
    commandInput.value = "";
  }
});

function printInput(command) {
  const inputLine = document.createElement("div");
  inputLine.textContent = "@root:" + command;
  contentElement.appendChild(inputLine);
}

function executeCommand(command) {
  // Handle commands and their outputs here
  if (command === "help") {
    printOutput("Available commands: help, echo");
  } else if (command.startsWith("echo")) {
    const text = command.substring(5).trim();
    printOutput(text);
  } else {
    printOutput("Command not found. Type 'help' for a list of commands.");
  }
}

function printOutput(text) {
  const output = document.createElement("div");
  output.textContent = text;
  contentElement.appendChild(output);
  contentElement.scrollTop = contentElement.scrollHeight;
}



const kali=document.querySelector(".kali");
function openTerminal(){
  kali.style.display="contents";
}


function closeTerminal(){
  kali.style.display="none";
}


// fullscreen

const fullscreenButton = document.getElementById("fullscreenButton");

fullscreenButton.addEventListener("click", function() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) { // Firefox
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
    document.documentElement.msRequestFullscreen();
  }
});




const contextMenu = document.getElementById("contextMenu");

window.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  showContextMenu(event.clientX, event.clientY);
});

window.addEventListener("click", () => {
  hideContextMenu();
});

function showContextMenu(x, y) {
  contextMenu.style.left = x + "px";
  contextMenu.style.top = y + "px";
  contextMenu.style.display = "block";
}

function hideContextMenu() {
  contextMenu.style.display = "none";
}

// Close context menu on pressing the Escape key
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideContextMenu();
  }
});




// navbar
// middle
function updateDateTime() {
  const dateTimeElement = document.getElementById("currentDateTime");
  const now = new Date();
  const options = {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  const formattedDateTime = now.toLocaleDateString(undefined, options);
  dateTimeElement.textContent = formattedDateTime;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial call to update date and time
updateDateTime();


function showNotificationBar(){
  var notificationBar = document.querySelector(".notificationBar");
  notificationBar.style.display="block";
}




function ale(){alert('all apps will bee occured here.............')};