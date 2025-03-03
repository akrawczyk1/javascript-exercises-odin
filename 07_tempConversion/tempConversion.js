const convertToCelsius = function(tempF) {
  const floatTemp = (tempF - 32) * 5.0/9.0;
  return parseFloat(floatTemp.toFixed(1));
};

const convertToFahrenheit = function(tempC) {
  const floatTemp = (tempC * 9.0/5.0) + 32;
  return parseFloat(floatTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
