//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const board = document.getElementById("board");

  // Generate 800 boxes
  for (let i = 0; i < 800; i++) {
    const box = document.createElement("div");
    box.classList.add("square");
    board.appendChild(box);
    // Add event listeners
    box.addEventListener("mouseover", function () {
      box.style.backgroundColor = getRandomColor();
      setTimeout(() => {
        box.style.backgroundColor = 'rgb(29, 29, 29)';
      }, 1000);
    });
  }
});

// Function to generate random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}