// global counter variable to keep track of state
let activeStep = 1;

//get the btn and attach event handlers
let prevBtn = document.getElementById("prev");
prevBtn.addEventListener("click", handlePrevClick);

let nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", handleNextClick);

// get the steps, lines  to change their properties on click
let steps = document.querySelectorAll(".step-wrapper");


function handlePrevClick() {
  activeStep--;
  steps[activeStep].classList.remove("active");
  if (activeStep == 1) {
    // enable prev btn
    prevBtn.disabled = true;
  }
  if (activeStep < steps.length) {
    nextBtn.disabled = false;
  }
}

function handleNextClick() {
  steps[activeStep].classList.add("active");
  activeStep++;

  if (activeStep == steps.length) {
    //disable next btn
    nextBtn.disabled = true;
  }
  if (activeStep > 1) {
    // enable prev btn
    prevBtn.disabled = false;
  }
}
