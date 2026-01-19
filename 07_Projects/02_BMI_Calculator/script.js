const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (isNaN(height) || height <= 0) {
    results.innerHTML = "Please enter a valid height";
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = "Please enter a valid weight";
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);

    let message = "";
    if (BMI < 18.6) {
      message = "You are under weight.";
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      message = "You are in the normal range.";
    } else {
      message = "You are overweight.";
    }

    results.innerHTML = `<span> Your BMI is <strong> ${BMI} </strong> </span> <p> ${message}</p>`;
  }
});
