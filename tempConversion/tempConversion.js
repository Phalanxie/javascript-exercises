function ftoc(f) {
  let celsius = f;
  //console.log(celsius);
  celsius = (Number(celsius) - 32) * (5/9);
  //console.log(celsius);
  celsius = celsius.toFixed(1);
  //console.log(celsius);
  return Number(celsius);

}

const ctof = function(c) {
  let fahrenheit = c;
  fahrenheit = Number(fahrenheit) * (9/5) + 32;
  fahrenheit = fahrenheit.toFixed(1);
  return Number(fahrenheit);

}

module.exports = {
  ftoc,
  ctof
}
