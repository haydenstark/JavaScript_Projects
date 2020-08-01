function addFunction() {
    var sum = 1 + 4;
    document.getElementById("Math").innerHTML = "1 + 4 = " + sum;
}

function subtractFunction() {
    var dif = 8-7;
    document.getElementById("Math").innerHTML= "8 - 7 = " + dif;
}

function multiply() {
    var prod = 9*6;
    document.getElementById("Math2").innerHTML= "9 * 6 = " + prod;
}

function divide() {
    var div = 144/12;
    document.getElementById("Math2").innerHTML= "144 / 12 = " +div;
}

function lottaMath() {
    var lots = (3 - 2 + 4) * 9 / 5
    document.getElementById("Math3").innerHTML= "3 minus 2 plus 4 times 9 divided by 5 is " +lots;
}

function mod() {
    var remainder = 137%9;
    document.getElementById("Math4").innerHTML= "137 divided by 9 has a remainder of " +remainder;
}

function negat() {
    var z = 17;
    document.getElementById("Math4").innerHTML= -z;
}

var p = 7;
p++;
alert(p);

var o = 19;
o--
document.write(o);

alert(Math.random());

alert(Math.random() *100);

alert(Math.PI);

alert(Math.pow(9,40));

alert(Math.sqrt(9));

document.write(Math.floor(6.9));
