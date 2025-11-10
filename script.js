
// FUNCTION FOR LETTER SPACING EXPANSION EFFECT

document.addEventListener("DOMContentLoaded", function () {
    const logoText = document.querySelector(".logo h1");

    function expandText() {
        logoText.style.letterSpacing = "8px";
        setTimeout(() => {
            logoText.style.letterSpacing = "2px";
        }, 1000); // Shrinks back after 1 second
    }

    // Run the effect every 3 seconds
    setInterval(expandText, 3000);
});



//FUNCTION FOR TOGGLE MENU

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}


// FUNCTION FOR TYPING EFFECT 
  document.addEventListener("DOMContentLoaded", function () {
      var typed = new Typed("#typed-text", {
          strings: [
              "HR Specialist: Driving Talent, Culture, and Organizational Success!",
              "HR Enthusiast: Cultivating Employee Growth & Organizational Success!",
              "Talent Sourcer | Finding the Best, Powering Success",
              "HR Policy Specialist: Shaping Workplaces that are Fair, Compliant, and Strong!"
          ],
          typeSpeed: 50,  // Speed of typing
          backSpeed: 25,  // Speed of erasing
          startDelay: 500, // Delay before typing starts
          backDelay: 1500, // Delay before erasing starts
          loop: true,  // Loops the text infinitely
          showCursor: true,  // Shows a blinking cursor
          cursorChar: "|", // Cursor character
      });
  });






function toggleDetails() {
    var details = document.getElementById("details");
    details.style.display = details.style.display === "none" ? "block" : "none";
}



document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            this.classList.toggle("flipped");
        });
    });
});




// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show button when user scrolls down
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "flex";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Scroll to top smoothly when button is clicked
scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});









