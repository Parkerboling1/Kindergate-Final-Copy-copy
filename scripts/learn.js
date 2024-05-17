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



  document.querySelector('.learnmoreform').addEventListener('submit', function(event) {
    event.preventDefault();
    document.querySelector('.learnmoreform').innerHTML = '<p>Your form has been submitted!</p>';
  });
  