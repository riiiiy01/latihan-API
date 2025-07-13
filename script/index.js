console.log("hello, world!");

const weightSection = document.getElementById("weight-section");
const temperatureSection = document.getElementById("temperature-section");
const lengthSection = document.getElementById("length-section");

const weightForm = document.getElementById("weightForm");
const lengthForm = document.getElementById("lengthForm");
const temperatureForm = document.getElementById("temperatureForm");

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
