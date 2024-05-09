function displayRandomNumber() {
    var randomNumber = Math.round(Math.random() * 40) - 20;

    document.getElementById("num").textContent = "Random Number: " + randomNumber;

    var feedbackDiv = document.getElementById("feedback");
    if (randomNumber < 0) {
      feedbackDiv.textContent = "Cold";
    } else {
      feedbackDiv.textContent = "Hot";
    }
  }