const submit = document.querySelector("#form");

submit.onsubmit = function (e) {

    e.preventDefault();

    //it saves the values typed by the user
    var age = document.querySelector("#age").value;
    var height = document.querySelector("#height").value.replace(",", ".");
    var weight = document.querySelector("#weight").value;

    console.log(typeof (age));
    console.log(typeof (height));

    function verificaVazio(campo) {

        if (campo === "") {
            let h2 = document.createElement("h2");
            h2.innerHTML = `Type your $`;
            document.getElementById("result").appendChild(h2);
        }
    }

    //it verifies if the user typed data
    if (age === "") {
        let h2 = document.createElement("h2");
        h2.innerHTML = "Type your age";
        document.getElementById("result").appendChild(h2);
    } else {
        console.log(age);
    }

    if (height === "") {
        let h2 = document.createElement("h2");
        h2.innerHTML = "Type your height";
        document.getElementById("result").appendChild(h2);
    } else {
        console.log(height);
    }

    if (weight === "") {
        let h2 = document.createElement("h2");
        h2.innerHTML = "Type your weight";
        document.getElementById("result").appendChild(h2);
    } else {
        console.log(weight);
    }

    //it generates and shows the bmi result for the user
    let ageValue = parseInt(age);
    let heightValue = parseFloat(height);
    let weightValue = parseInt(weight);
    let bmi = (weightValue / Math.pow(heightValue, 2)).toFixed(1);

    let h2 = document.createElement("h2");
    h2.innerHTML = `Your BMI is ${bmi}`;
    document.getElementById("result").appendChild(h2);

}