/*let in1 = document.getElementById("input1");
    let num1 = Number.parseFloat(in1.value);*/

function checkinput1() {
    let p1in = document.getElementById("p1input");
    let prefac = Number.parseFloat(p1in.value);

    //console.log(prefac);

    if (Number.isSafeInteger(prefac) === true && prefac > 0 && prefac < 20) {
        factorial(prefac);
    } else if (prefac > 20 || prefac < 1) {
        alert("Please enter a number between 1 and 20.");
    } else if (prefac > 0) {
        alert("Please enter a whole number.");
    } 
}

function factorial(input) {
    let ans = input;
    let output;

    for (let i = ans - 1; i > 0; i--) {
        ans = ans * i;
    }

    output = ans;
    document.getElementById("p1output").innerHTML = output;
}