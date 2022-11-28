// week plane delay data for block chart function
const week1 = {
  height: ["100%", "0", "50%", "25%", "25%", "50%", "100%"],
  name: ["high-block", "none", "middle-block", "short-block", "short-block", "middle-block", "high-block"],
  value: [4, 0, 2, 1, 1, 2, 4],
};
const week2 = {
  height: ["50%", "25%", "25%", "50%", "100%", "25%", "50%"],
  name: ["middle-block", "short-block", "short-block", "middle-block", "high-block", "short-block", "middle-block"],
  value: [2, 1, 1, 2, 4, 1, 2],
};
const week3 = {
  height: ["25%", "0", "100%", "100%", "50%", "100%", "0"],
  name: ["short-block", "", "high-block", "high-block", "middle-block", "high-block", "none"],
  value: [1, 0, 4, 4, 2, 4, 0],
};
const week4 = {
  height: ["0", "0", "25%", "0", "0", "0", "0"],
  name: ["none", "none", "short-block", "none", "none", "none", "none"],
  value: [0, 0, 1, 0, 0, 0, 0],
};
const week5 = {
  height: ["25%", "0", "0", "0", "25%", "50%", "0"],
  name: ["short-block", "none", "none", "none", "short-block", "middle-block", "none"],
  value: [1, 0, 0, 0, 1, 2, 0],
};
// Week plane delay data for block chart function

// block chart animation function + change color on week button on click and previous week button clicked
function planeDelays(a, b) {
  for (let i = 0; i < 7; i++) {
    let plusone = i + 1;

    let block = document.getElementById("block" + plusone);

    block.style.height = a.height[i];
    block.style.animationName = a.name[i];
    block.lastElementChild.value = a.value[i];
    if (i < 5) {
      document.getElementById("weekButton" + plusone).style.color = "#ffffff";
      document.getElementById("weekButton" + plusone).style.backgroundColor = "#8b8c89";
    }
    b.style.backgroundColor = "white";
    b.style.color = "#8b8c89";
  }
}
// block chart animation function + change color on week button on click and previous week button clicked

// clickable menu icon for link display
function menuDisplay() {
  let listItems = document.getElementById("link-menu");
  let listDisplay = listItems.style.display;

  listItems.style.display = "block";

  if (listDisplay == "block") {
    listItems.style.display = "none";
  }
}
// clickable menu icon for link display

// clickable login button for login interface
function loginDisplay() {
  let loginItems = document.getElementById("loginForm");
  let loginDisplay = loginItems.style.display;

  loginItems.style.display = "block";

  if (loginDisplay == "block") {
    loginItems.style.display = "none";
  }
}
// clickable login button for login interface
