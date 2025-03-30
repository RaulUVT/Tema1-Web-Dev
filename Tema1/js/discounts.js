
document.addEventListener('DOMContentLoaded', function() {
  // Set the countdown date (3 days from now)
  const countdownDate = new Date();
  countdownDate.setDate(countdownDate.getDate() + 3);
  
  // Update countdown every second
  const countdownTimer = setInterval(function() {
    // Get current date and time
    const now = new Date().getTime();
    
    // Find the time difference between now and the countdown date
    const distance = countdownDate - now;
    
    // Calculate days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the elements
    document.getElementById('days').innerHTML = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerHTML = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;
    
    // If the countdown is finished, stop the timer
    if (distance < 0) {
      clearInterval(countdownTimer);
      document.getElementById('days').innerHTML = '00';
      document.getElementById('hours').innerHTML = '00';
      document.getElementById('minutes').innerHTML = '00';
      document.getElementById('seconds').innerHTML = '00';
    }
  }, 1000);
});
