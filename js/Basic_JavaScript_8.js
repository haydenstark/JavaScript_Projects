function cotw() {
    var p1 = "Can you ";
    var p2 = "paint with ";
    var p3 = "all the colors ";
    var p4 = "of THE WIND?!";
    var allTogetherNow = p1.concat(p2,p3,p4);
    document.getElementById("conc").innerHTML= allTogetherNow;
}

function slice() {
    var verse = "How HIGH does the sycamore grow? If you cut it down, then YOU'LL NEVER KNOW.";
    var sect = verse.slice(8,42);
    document.getElementById("sliceNdice").innerHTML=sect;
}

var test = "Is ThIs WoRkInG"
var up = test.toUpperCase();
alert(up);

var search = test.search(/working/i);
alert(search);

function stringM() {
    var x = 2164;
    document.getElementById("numToString").innerHTML=x.toString();
}

function precM() {
    var x = 12094.4905327548;
    document.getElementById("precis").innerHTML=x.toPrecision(7);
}

var y = 19.234590;
alert(y.toFixed(3));

var str = ("Hello, World!")
alert(str.valueOf());