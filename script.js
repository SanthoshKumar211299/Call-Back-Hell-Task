// Define a countdown function using callback hell
function countdown(num, callback) {
    if (num > 0) {
      console.log(num);
      setTimeout(function() {
        countdown(num - 1, callback);
      }, 1000);
    } else {
      callback();
    }
  }
  
  // Start the countdown from 10
  countdown(10, function() {
    console.log("Happy Independence Day");
    // Display "Happy Independence Day" after the countdown
    var countdownDiv = document.getElementById('countdown');
    countdownDiv.innerHTML = "Happy Independence Day";
  });
  