



// Simulate a click on the button


window.onload = function() {
  // Find the button element
  const button = document.getElementById("plus-button");

  
  
  // Create and dispatch a click event on the button
  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  button.dispatchEvent(event);
};

let slideIndex = 1;
  showSlides(slideIndex);


function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.scrollTo(0,0);
    scrollLeft = window.scrollTo(0,0);
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
  }
  
  function enableScroll() {
    window.onscroll = function() {};
  }
  
  var checkbox = document.querySelector("input[name=checkboxlistener]");
  
  checkbox.addEventListener('change', function() {
  
    if (this.checked) {
      window.scrollTo(0,0);
      disableScroll();
    } else {
      enableScroll();
      document.getElementById("mobilecheckbox").checked = false;
      }
  });

  






  document.querySelector('.enrollmentbutton').addEventListener('click', function() {
    window.location = './learn-more.html';
    alert('Fill Out Section On Learn More Page For Enrollment Inquiry');
  });
  
  document.querySelector('.mobileenrollmentbutton').addEventListener('click', function() {
    window.location = './learn-more.html';
    alert('Fill Out Section On Learn More Page For Enrollment Inquiry');
  });

  







function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}




