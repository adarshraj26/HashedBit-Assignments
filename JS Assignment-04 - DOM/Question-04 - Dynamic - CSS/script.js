 // Function to change font size
 document.getElementById("fontsize").addEventListener("input", function() {
    document.getElementById("text-container").style.fontSize = this.value + "px";
  });

  // Function to change font style to italic
  document.getElementById("italic").addEventListener("click", function() {
    var textContainer = document.getElementById("text-container");
    textContainer.style.fontStyle = textContainer.style.fontStyle === "italic" ? "normal" : "italic";
  });

  // Function to toggle text underline
  document.getElementById("underline").addEventListener("click", function() {
    var textContainer = document.getElementById("text-container");
    textContainer.style.textDecoration = textContainer.style.textDecoration === "underline" ? "none" : "underline";
  });

  // Function to toggle text bold
  document.getElementById("bold").addEventListener("click", function() {
    var textContainer = document.getElementById("text-container");
    textContainer.style.fontWeight = textContainer.style.fontWeight === "bold" ? "normal" : "bold";
  });

  // Function to change font family
  document.getElementById("list").addEventListener("change", function() {
    document.getElementById("text-container").style.fontFamily = this.value;
  });

  // Function to get CSS properties
  document.getElementById("getstyle").addEventListener("click", function() {
    var textContainer = document.getElementById("text-container");
    var cssProps = "";
    cssProps += "font-size: " + textContainer.style.fontSize + "; ";
    cssProps += "font-style: " + textContainer.style.fontStyle + "; ";
    cssProps += "font-weight: " + textContainer.style.fontWeight + "; ";
    cssProps += "text-decoration: " + textContainer.style.textDecoration + "; ";
    cssProps += "font-family: " + textContainer.style.fontFamily + "; ";
    document.getElementById("css-props").textContent = cssProps;
  });

  // Function to change text color
  document.getElementById("colorchange").addEventListener("click", function() {
    var color = document.getElementById("colorbox").value;
    document.getElementById("text-container").style.color = color;
  });