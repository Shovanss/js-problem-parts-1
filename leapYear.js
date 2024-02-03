function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isLeap = isLeapYear(2042);
console.log(isLeap);


function isLeapYear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
    
}

const isLeap2 = isLeapYear2(2044);
const isLeap3 = isLeapYear2(4544);
const isLeap4 = isLeapYear2(3244);
const isLeap5 = isLeapYear2(8944);
console.log(isLeap2, isLeap3, isLeap4, isLeap5);