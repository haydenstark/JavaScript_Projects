function rideF() {
    var Height, canRide;
    Height =document.getElementById("Height").value; 
    canRide =(Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML= canRide + " to ride."
}

function voteF() {
    var Age, canVote;
    Age =document.getElementById("age").value;
    canVote =(Age>=18) ? "You can vote":"You are too young to vote";
    document.getElementById("voteResult").innerHTML= canVote;
}

function Vehicle(make, model, year, color) {
    this.Vehicle_make = make;
    this.Vehicle_model = model;
    this.Vehicle_year = year;
    this.Vehicle_color = color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1972, "Mustard");

function myF() {
    document.getElementById("keywordsAndConstructors").innerHTML=
    "Erik drives a " + Erik.Vehicle_color + "-colored " + Erik.Vehicle_model + " manufactured in " + Erik.Vehicle_year;
}

function Pet(age, species, color) {
    this.Pet_age = age;
    this.Pet_species = species;
    this.Pet_color = color;
}
var Thunder = new Pet(4, "dog", "white");
var Pumba = new Pet(9, "cat", "tortoise-shell");
var Zazu = new Pet(1, "parrot", "blue");

function anotherF() {
    document.getElementById("newAndThis").innerHTML=
    "Zazu is a " + Zazu.Pet_age + " year-old " + Zazu.Pet_color + " " + Zazu.Pet_species;
}




function People(firstName, eyeColor, gender) {
    this.People_firstName = firstName;
    this.People_eyeColor= eyeColor;
    this.People_gender= gender;
}

var Tim = new People("Tim", "Green", "male");
var Sophia = new People("Sophia", "Brown", "female");
var Riley = new People("Riley", "Hazel", "nonbinary");


function nestedF() {
    document.getElementById("nested").innerHTML=nest();
    function nest() {
        var start=5;
        function addOne() {start ++;}
        addOne();
        return start;
    }
}