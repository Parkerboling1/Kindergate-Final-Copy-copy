function tabspage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("cities");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("buttoncities");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it





function tabspage1(pagename, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("mobilecities");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display="none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("buttoncities");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pagename).style.display="block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}
document.getElementById("defaultOp").click();

// Get the element with id="defaultOpen" and click on it





//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV scroll lock VVVVVVVVVVVVVVVVV

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
/*
==========================================================================================

*/

window.addEventListener("load", function() {
  window.dispatchEvent(new Event('resize'));
});
window.onresize = function() {
  var i, tabcontent;
  tabcontent= document.getElementsByClassName("mobiletabcontent")
  for(i=0; i < tabcontent.length; i++){
    if (window.innerWidth<"1024"){
     
      document.getElementById("defaultOp").click()
    }else if(window.innerWidth>="1024"){
      
      document.getElementById("defOpen").click()
      
    }
  }
}

var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

if (width < 1024){
  document.getElementById("defaultOp").click()
}else if(width >= 1024){
  document.getElementById("defOpen").click();
};







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


document.querySelector('#fade').addEventListener('scroll', function() {

  var fade = document.querySelector('#fade');
  var fadePosition = fade.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3;

  if (fadePosition < screenPosition) {
    fade.classList.add('fadeIn');
  }
  
}




// Function to handle scroll event


// Add scroll event listener



























