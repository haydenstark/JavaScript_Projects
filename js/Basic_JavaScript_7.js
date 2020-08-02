var x = 17

function firstF() {
    var y = 3;
    document.write(x+y);
}

firstF();

function secondF() {
    document.write(x-y);
}

secondf();

console.log(secondf());

function timeF() {
    if (new Date().getHours() >= 12) {
        document.getElementById("time").innerHTML="We are in the \"pm\"!";
    }
}

function ownF() {
    if (9>4) {
        document.getElementById("own").innerHTML="9 is greater than 4";
    }
}

function ageF() {
    input = document.getElementById("input").value;
    if (input >= 18) {
        res = "Wow, a full blown adult.";
    }
    else {
        res = "*gasp* a child";
    }
    document.getElementById("result").innerHTML= res;
}

function ofDayF() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "It's morning";
    }
    else if (time >= 12 == time < 18) {
        reply = "It's afternoon";
    }
    else {
        reply = "It's evening";
    }
    document.getElementById("ofDay").innerHTML=reply;
}