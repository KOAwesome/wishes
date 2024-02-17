// When the page loads, select the heart elements and add an event listener for clicks
window.onload = function() {
    var hearts = document.getElementsByClassName('heart');
    for (var i = 0; i < hearts.length; i++) {
      hearts[i].addEventListener('click', function() {
        // When a heart is clicked, toggle the "clicked" class and update the message
        this.classList.toggle('clicked');
        updateMessage();
      });
    }
  
    // Call updateMessage to initialize the message
    updateMessage();
  };
  
  // Updates the message based on which hearts have been clicked
  function updateMessage() {
    var message = '';
    var hearts = document.getElementsByClassName('heart');
    for (var i = 0; i < hearts.length; i++) {
      if (hearts[i].classList.contains('clicked')) {
        message += '❤ ';
      } else {
        message += ' _ ';
      }
    }
  
    // Set the message text
    var messageElement = document.getElementById('message');
    messageElement.innerHTML = message;
  }