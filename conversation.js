var firstName = 'Sabbir';
var lastName = 'Rahman';

var fullName = firstName + ' ' + lastName;
console.log(fullName)

// integer number 
var penPrice = "10";
var pepperPrice = '20';
// var total = penPrice + pepperPrice;
var penPriceNumber = parseInt(penPrice);
var pepperPriceNumber = parseInt(pepperPrice)
var totalNumber = penPriceNumber + pepperPriceNumber;

// console.log(total)

// float number 

var onionPrice = "15.50";
var potatoPrice = "20.25";
// console.log(onionPrice+potatoPrice)
var onionPriceNumber = parseFloat(onionPrice);
var potatoPriceNumber = parseFloat(potatoPrice);

var totalPrice = onionPriceNumber + potatoPriceNumber;
console.log(totalPrice)

var number1 = 0.1;
var number2 = 0.2;
var totalNumber = number1 + number2;
var totalNumber = totalNumber.toFixed(2)
var totalNumber = parseFloat(totalNumber)
console.log(totalNumber) 