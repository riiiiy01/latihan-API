console.log("hello, world!");

const weightSection = document.getElementById("weight-section");
const temperatureSection = document.getElementById("temperature-section");
const lengthSection = document.getElementById("length-section");

const weightForm = document.getElementById("weightForm");
const lengthForm = document.getElementById("lengthForm");
const temperatureForm = document.getElementById("temperatureForm");

const form = document.getElementById("lengthForm");
const resultUnitInput = form.elements.resultUnit;
const baseUnitSelect = document.getElementById("baseUnit");
const resultUnitSelect = document.getElementById("resultUnit");


// resultUnitInput.addEventListener("invalid", (event) => {

  
// });

// if (baseUnitSelect.value == resultUnitSelect.value) {
//   warnElement
// }


lengthSection.addEventListener("click", function () {
  if (temperatureSection.classList.contains("active")) {
    temperatureForm.classList.toggle("not-active");
    temperatureSection.classList.toggle("active");
    lengthSection.classList.toggle("active");
    lengthForm.classList.toggle("not-active");
  } 

  if (weightSection.classList.contains("active")) {
    weightForm.classList.toggle("not-active");
    weightSection.classList.toggle("active");
    lengthForm.classList.toggle("not-active");
    lengthSection.classList.toggle("active");
  }
});

weightSection.addEventListener("click", function () {
  console.log("apcb");
  if (lengthSection.classList.contains("active")) {
    lengthForm.classList.toggle("not-active");
    lengthSection.classList.toggle("active");
    weightForm.classList.toggle("not-active");
    weightSection.classList.toggle("active");
  }

  if (temperatureSection.classList.contains("active")) {
    temperatureForm.classList.toggle("not-active");
    temperatureSection.classList.toggle("active");
    weightForm.classList.toggle("not-active");
    weightSection.classList.toggle("active");
  }
});

temperatureSection.addEventListener("click", function () {
  console.log("apalah");

  if (lengthSection.classList.contains("active")) {
    lengthForm.classList.toggle("not-active");
    lengthSection.classList.toggle("active");
    temperatureSection.classList.toggle("active");
    temperatureForm.classList.toggle("not-active");
  } 

  if (weightSection.classList.contains("active")) {
    weightForm.classList.toggle("not-active");
    weightSection.classList.toggle("active");
    temperatureForm.classList.toggle("not-active");
    temperatureSection.classList.toggle("active");
  }
});


lengthForm.addEventListener("submit", function(e) {
  e.preventDefault()

  const userChoice = document.getElementById("baseUnit").value;
  const lengthValue = document.getElementById("lengthValue").value;
  const resultUnit = document.getElementById("resultUnit").value;

  if (resultUnitSelect.value === baseUnitSelect.value) {
    resultUnitSelect.setCustomValidity("can't put the same unit as baseUnit!\n choose another unit to convert!");
    return
  } else {
      resultUnitSelect.setCustomValidity("");
  }

  console.log(`kamu milih ${userChoice}`);
  console.log(`kamu milih ${lengthValue}`);
  console.log(`${resultUnit}`);

  this.reset();
})