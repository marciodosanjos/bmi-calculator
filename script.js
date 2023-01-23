const btn = document.querySelector("#button");

btn.onmouseover = function () {
    btn.style.background = 'rgb(54, 63, 71)';
}
btn.onmouseout = function () {
    btn.style.background = 'rgb(26, 47, 66)';
}

const btnClean = document.querySelector("#btn-clean");

btnClean.onmouseover = function () {
    btnClean.style.background = 'rgb(197, 203, 209)';
}
btnClean.onmouseout = function () {
    btnClean.style.background = 'rgb(158, 169, 179)';
}


const submit = document.querySelector("#form");

submit.onsubmit = function (e) {

    e.preventDefault();

    submit.onclick = function () {
        location.reload();
    }

    //empty array  will save the field names when inputs were null
    let answers = [];

    //it saves the values typed by the user
    let age = document.querySelector("#age").value;
    let height = document.querySelector("#height").value.replace(",", ".");
    let weight = document.querySelector("#weight").value;
    console.log(answers);

    //it verifies if the user typed data. If users types nothing, it adds the value undefined to the array
    age === "" ? answers.push("age") : console.log(age);
    height === "" ? answers.push("height") : console.log(height);
    weight === "" ? answers.push("weight") : console.log(weight);

    if (answers.length > 0) {

        // it generates the title the warning box
        let h3 = document.createElement("h3");
        h3.innerHTML = "Please consider the following errors:";
        h3.style.textAlign = "center";
        document.getElementById("result").appendChild(h3);
        document.getElementById("result").style.display = "flex"
        h3.style.paddingBottom = '10px';

        for (let i = 0; i <= answers.length; i++) {
            if (answers[i]) {

                // let input = answers[i];
                // console.log(`Sou o input ${input}`)
                document.getElementById(answers[i]).style.borderColor = "rgb(154, 86, 214)";

                let error = document.createElement("p");
                error.innerHTML = `Type your ${answers[i]}`;
                document.getElementById("result").appendChild(error);
                document.getElementById("result").style.visibility = "visible";
            }

        }


    } else {

        // it prints a new msg in the intro div
        document.querySelector("#intro-description").innerHTML = "Your Body Mass Index is:";
        document.querySelector(".intro").marginBotton = "20px";
        document.querySelector("#form").style.display = "none";
        document.querySelector(".content").style.gap = "10px";

        //it calculates the bmi result for the user
        let ageInt = parseInt(age);
        let heightInt = parseFloat(height) / 100;
        let weightInt = parseInt(weight);
        let bmi = (weightInt / Math.pow(heightInt, 2)).toFixed(1);

        // function to generate the html blocks and its message to the user
        function generateResult(bmi, message) {

            // it changes the visibility state of the result div
            document.getElementById("result").style.display = "flex";

            let h2 = document.createElement("h2");
            h2.innerHTML = `${bmi}`;
            document.getElementById("result").appendChild(h2);

            let divResult = document.createElement("div");
            divResult.id = "result-div";

            document.querySelector(".content").appendChild(divResult);
            divResult.style.margin = "20px";
            divResult.style.width = "15vw";
            let result = document.createElement("p");
            result.style.textAlign = "center";
            result.innerHTML = message;
            document.getElementById("result-div").appendChild(result);
        }

        let messages = {
            message1: "You are too skinny. Consider consulting a nutritionist.",
            message2: "Congrats! You have the ideal IMC. Keep doing so!",
            message3: "You are slightly overweight. Consider exercising.",
            message4: "You are overweight. Consider consulting a nutritionist and exercising.",
            message5: "You are extremely overweight. Consider seeing a doctor urgently to address the issue and get healthy again."
        }

        switch (true) {
            case (bmi < 18.5):
                generateResult(bmi, messages.message1);
                break;

            case (bmi >= 18.5 && bmi <= 24.9):
                generateResult(bmi, messages.message2);
                break;

            case (bmi >= 25 && bmi <= 29.9):
                generateResult(bmi, messages.message3);
                break;

            case (bmi >= 30 && bmi <= 34.9):
                generateResult(bmi, messages.message4);
                break;

            case (bmi >= 35 && bmi <= 39.9):
                generateResult(bmi, messages.message5);
                break;

            default:
                generateResult(bmi, messages.message5);
                break;
        }

        let btnBack = document.createElement("button");
        btnBack.id = "btn-back";
        btnBack.style.backgroundColor = "rgb(158, 169, 179)";
        btnBack.innerHTML = "Try again"
        document.querySelector(".content").appendChild(btnBack);
        btnBack.onclick = function () {
            location.reload()
        }

    }

}