function changeColor() {
    // Random color generate karo
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  
    // Body ka background change karo
    document.body.style.backgroundColor = randomColor;
  
    // Color code display karo
    document.getElementById("color-code").textContent = "Current Color: " + randomColor;
  }
  