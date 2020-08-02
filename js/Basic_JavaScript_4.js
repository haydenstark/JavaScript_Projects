function wordAssociation() {
    var feeling = {
        Red: "Heat",
        Blue: "Tranquil",
        Green: "Revitalizing",
        Purple: "Royal",
        Yellow: "Bright",
        Grey: "Calm",
    };
    delete feeling.Grey;
    document.getElementById("Dictionary").innerHTML= feeling.Grey;
}