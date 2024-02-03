function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}



function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const feetRemaining = inch % 12;
    const result = feetNumber + ' ft ' + feetRemaining + ' inch ';
    return result;
}

// const shovanHeight = inchToFeet(62);
// const shovanHeight2 = inchToFeet2(75);
// console.log(shovanHeight);
// console.log(shovanHeight2);


function mileToKiloMeter(mile){
    const kilo = mile * 1.60934;
    return kilo;
}
const kilometer = mileToKiloMeter(5);
console.log(kilometer);

