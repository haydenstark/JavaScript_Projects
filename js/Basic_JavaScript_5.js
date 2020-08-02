document.write(typeof "Bonjour");
document.write(typeof true);
document.write(typeof 4);

function test() {
    document.getElementById("test").innerHTML= isNaN(007);
}

function test2() {
    document.getElementById("test2").innerHTML= 4E310;
}

function test3() {
    document.getElementById("test3").innerHTML= -5E310;
}

document.write(6>4);

console.log(10+5);

document.write("11" + 6); //Type coercion

console.log(5>13);

document.write(5==5);

document.write(9==1);

document.write(11===11);

document.write(11==="ten");

document.write(11==="eleven");

document.write(11===10);

document.write(15>11 && 11>4);

document.write(15>11 && 4>11);

document.write(15>11 || 4>11);

function notF() {
    document.getElementById("not").innerHTML= !(19>2);
}

function notF2() {
    document.getElementById("not2").innerHTML= !(4>82);
}