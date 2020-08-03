function toTen() {
    var dig = "";
    var x=1;
    while (x<11) {
        dig += "<br>" +x;
        x++;
    }
    document.getElementById("countToTen").innerHTML = dig;
}

var str="Mysterious as the dark side of, the moon!";
alert(str.length);

var colors = ["Red","Blue","Green","Yellow","Purple","Orange"];
var content = "";
var y;
function forLoop() {
    for (y=0; y<colors.length; y++) {
        content += colors[y] + "<br>";
    }
    document.getElementById("colorsList").innerHTML=content;
}

var Instruments=["Violin","Clarinet","Flute","Cello","Viola","Organ","Bassoon"];
var Cont= "";
function instrument() {
    for (y=0; y<Instruments.length; y++) {
        Cont += Instruments[y] + "<br>";
    }
    document.getElementById("listOfInstruments").innerHTML=Cont;
}

function arrayF() {
    var tv_channel= []
    tv_channel[31]= "Disney";
    tv_channel[32]= "Nickelodeon";
    tv_channel[33]= "Cartoon Network";
    document.getElementById("array").innerHTML= "Growing up, " +tv_channel[32]+ " was on channel 32";
}

function constant_F() {
    const shoe = {style:"Lace up", brand:"Nike", color:"Tan"};
    shoe.color = "Grey";
    shoe.cost="$95";
    document.getElementById("Constant").innerHTML= "My shoes are " +shoe.color+ " " +shoe.brand+ " and cost " +shoe.cost;
}

var x = 7;
{let x =5};
alert(x);

var y=12;
{var y=9};
alert(y);

{let z=3;
    alert(z);
}

function nameF(name) {
    return "Hi " +name;
}
document.getElementById("namegame").innerHTML= nameF("Intruder");

let fridge = {
    make: "Whirlpool ",
    color: "silver ",
    year: "2013 ",
    style: "side-by-side, french doors",
    description : function fridgeF() {
        return "This fridge is a " + this.color + this.year + this.make + "with " +this.style;
    }
};
document.getElementById("fridge").innerHTML=fridge.description();

function breakF() {
    let res = "";
    var q = 0;
    while (q < 7) {
        res += "<br>" + q;
        q++;
        if (q==4) {
            break;
        }
     }
    document.getElementById("breakres").innerHTML= res;
}

for (let v=0; v<6; v++) {
    if (v==3) continue;
    console.log(v)
}