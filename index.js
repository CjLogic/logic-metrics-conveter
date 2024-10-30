let inputConverter = document.getElementById("input-converter");
let convertBtn = document.getElementById("convert-btn");
let meterFeet = document.getElementById("meter-feet");
let literGallons = document.getElementById("liter-gallons");
let kiloPounds = document.getElementById("kilo-pounds");
let resetBtn = document.getElementById("reset-btn");

convertBtn.addEventListener("click", function () {
  let inputValue = inputConverter.value;
  let meterToFeet = (inputValue * 3.281).toFixed(3);
  let literToGallons = (inputValue * 0.264).toFixed(3);
  let kiloToPounds = (inputValue * 2.204).toFixed(3);

  meterFeet.textContent = `${inputValue} meters = ${meterToFeet} feet | ${inputValue} feet = ${meterToFeet} meters`;
  literGallons.textContent = `${inputValue} liters = ${literToGallons} gallons | ${inputValue} gallon = ${literToGallons} liters`;
  kiloPounds.textContent = `${inputValue} kilos = ${kiloToPounds} pounds | ${inputValue} pound = ${kiloToPounds} kilos`;
});

resetBtn.addEventListener("click", function () {
  inputConverter.value = "";
  meterFeet.textContent = "";
  literGallons.textContent = "";
  kiloPounds.textContent = "";
});
