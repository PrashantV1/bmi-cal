var data = require("./data.json");

// console.log(data[0].Gender);

var total_overweight = 0;
var total_underweight = 0;
var total_normalweight = 0;
var total_obese = 0;

const bmical = (weight, height) => {
  //  let total_overweight=0;
  let result = (weight / ((height * height) / 10000)).toFixed(2);
  if (result <= 18.4) {
    result = `${result} Underweight  Malnutrition risk`;
    total_underweight++;
  } else if (result >= 18.5 && result <= 24.9) {
    result = `${result} Normal weight       Low risk`;
    total_normalweight++;
  } else if (result >= 25 && result <= 29.9) {
    result = `${result} Overweight          Enhanced risk`;
    total_overweight++;
  } else if (result >= 30 && result <= 34.9) {
    result = `${result} Moderately obese    Medium risk`;
    total_obese++;
  } else if (result >= 35 && result <= 39.9) {
    result = `${result} Severely obese  High risk`;
    total_obese++;
  } else {
    result = `${result} Very severely obese  Very high risk`;
    total_obese++;
    //  total_overweight++;
  }
  return result;
};

// bmical(data)

// console.log(data);

const bmidata = () => {
  console.log(`BMI    Category           Risk `);
  for (i = 0; i < data.length; i++) {
    let result = bmical(data[i].WeightKg, data[i].HeightCm);

    console.log(result);
  }
};
bmidata();


console.log("Total Underweight  :  ", total_underweight);
console.log("Total Normalweight :  ", total_normalweight);
console.log("Total Overweight   :  ", total_overweight);
console.log("Total Obese        :  ", total_obese);
console.log("Total obese and Overweigt   :   ", total_overweight+total_obese);
