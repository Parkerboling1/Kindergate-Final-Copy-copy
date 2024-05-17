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



  

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  // Function to handle scroll event
  function onScroll() {
    
    const targetElement = document.getElementById('targetElement');
    const targetElement2 = document.getElementById('targetElement2');
    const targetElement3 = document.getElementById('targetElement3');
    const targetElement4 = document.getElementById('targetElement4');
    const targetElement5 = document.getElementById('targetElement5');
    const targetElement6 = document.getElementById('targetElement6');
    const targetElement7 = document.getElementById('targetElement7');
    const targetElement8 = document.getElementById('targetElement8');
    const targetElement9 = document.getElementById('targetElement9');
    const targetElement10 = document.getElementById('targetElement10');
    const targetElement11 = document.getElementById('targetElement11');
    const targetElement12 = document.getElementById('targetElement12');
    const targetElement13 = document.getElementById('targetElement13');
    const targetElement14 = document.getElementById('targetElement14');



    
    if (isInViewport(targetElement)) {
      targetElement.classList.add('visible');
    } 
    if (isInViewport(targetElement2)) {
      targetElement2.classList.add('visible');
    }
    if (isInViewport(targetElement3)) {
      targetElement3.classList.add('visible');
    }
    if (isInViewport(targetElement4)) {
      targetElement4.classList.add('visible');
    }
    if (isInViewport(targetElement5)) {
      targetElement5.classList.add('visible');
    }
    if (isInViewport(targetElement6)) {
      targetElement6.classList.add('visible');
    }
    if (isInViewport(targetElement7)) {
      targetElement7.classList.add('visible');
    }
    if (isInViewport(targetElement8)) {
      targetElement8.classList.add('visible');
    }
    if (isInViewport(targetElement9)) {
      targetElement9.classList.add('visible');
    }
    if (isInViewport(targetElement10)) {
      targetElement10.classList.add('visible');
    }
    if (isInViewport(targetElement11)) {
      targetElement11.classList.add('visible');
    }
    if (isInViewport(targetElement12)) {
      targetElement12.classList.add('visible');
    }
    if (isInViewport(targetElement13)) {
      targetElement13.classList.add('visible');
    }
    if (isInViewport(targetElement14)) {
      targetElement14.classList.add('visible');
    }
    
  }

  // Add scroll event listener
  window.addEventListener('scroll', onScroll);

  // Trigger scroll event on page load to check initial visibility
  window.addEventListener('load', onScroll);
  