/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  const time_i = parseInt(time);
  if (time_i < 12) {
    return "Good Morning";
  } else if (time_i < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function displayMessage(str) {
  document.getElementById("greeting").innerText = str;
}
