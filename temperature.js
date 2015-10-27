function celsiusToFahrenheit(x) {
var y = ( x * 1.8) + 32 
return Math.floor(y) + " degrees fahrenheit"
}

celsiusToFahrenheit()



function fahrenheitToCelsius(x) {
    var y = (x - 32) * .5556 
    return Math.floor(y) + " degrees celsius"
}

fahrenheitToCelsius()
