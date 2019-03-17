
function c1_output() {
    let max_percent = 20;
    let answer = document.getElementById("c1_answer").value;
    let score = document.getElementById("c1_score");
    let value = parseInt(answer);
    let total = 0;
    if(isNaN(value))
        score.innerHTML = "Invalid Input";
    else

        if (value < max_percent) {
            total = (value / max_percent) * 5;
            console.log(total)
        }else
            total = 5;
        score.innerHTML = total.toString()
    return total
}
function c2_output() {

    let answer = document.getElementById("c2_answer").value
    let score = document.getElementById("c2_score")
    let value = parseInt(answer)
    let max_percent = 20
    let total = 0;
    if(isNaN(value))
        score.innerHTML = "Invalid Input";
    else
        if (value < max_percent) {
            total = (value / max_percent) * 5;
            console.log(total)
        }else
            total = 5;
        score.innerHTML = total.toString()
    return total
}
function c3_output() {
    let answer = document.getElementById("c3_answer").value
    let score = document.getElementById("c3_score")
    let value = parseInt(answer)
    let max_percent = 80
    let total = 0;
    if(isNaN(value))
        score.innerHTML = "Invalid Input";
    else
        if (value < max_percent) {
            total = (value / max_percent) * 5;
            console.log(total)
        }else
            total = 5;
        score.innerHTML = total.toString()
    return total
}
function c4_output() {
    let answer = document.getElementById("c4_answer").value
    let score = document.getElementById("c4_score")
    let value = parseInt(answer)
    let max_percent = 80
    let total = 0;
    if(isNaN(value))
        score.innerHTML = "Invalid Input";
    else
        if (value < max_percent) {
            total = (value / max_percent) * 5;
            console.log(total)
        }else
            total = 5;
        score.innerHTML = total.toString()
    return total
}
function c5_output() {
    let answer = document.getElementById("c5_answer").value
    let score = document.getElementById("c5_score")
    let value = parseInt(answer)
    let total = 0
    if(isNaN(value))
        score.innerHTML = "Invalid Input"
    else
        if(value <= 3)
            total = value
        else
            total = 4
        score.innerHTML = total.toString()
    return total
}
function c6_output() {
    let answer = document.getElementById("c6_answer").value
    let score = document.getElementById("c6_score")
    answer = answer.toLowerCase()
    answer = answer.charAt(0)
    console.log(typeof(answer))
    let total;
    if (answer === "y") {
        total = 3
        score.innerHTML = total.toString()
    }else if(answer === "n") {
        total = 0
        score.innerHTML = total.toString()
    }else
        score.innerHTML = "Invalid Input"
        total = 0

    return total

}
function c7_output() {
    let answer = document.getElementById("c7_answer").value
    let score = document.getElementById("c7_score")
    let value = parseInt(answer)
    let total = 0
    if(isNaN(value))
        score.innerHTML = "Invalid Input"
    else {
        if (value <= 2)
            total = value
        else
            total = 3
        score.innerHTML = total.toString()
    }
    return total
}
function c8_output() {
    let answer = document.getElementById("c8_answer").value
    let score = document.getElementById("c8_score")
    let value = parseInt(answer)
    let max_percent = 80
    let total = 0;
    if(isNaN(value))
        score.innerHTML = "Invalid Input";
    else
        if (value < max_percent) {
            total = (value / max_percent) * 5;
            console.log(total)
        }else
            total = 5;
        score.innerHTML = total.toString()
    return total
}
function c9_output() {
    let answer = document.getElementById("c9_answer").value
    let score = document.getElementById("c9_score")
    answer = answer.toLowerCase()
    answer = answer.charAt(0)
    console.log(typeof(answer))
    let total;
    if (answer === "y") {
        total = 5
        score.innerHTML = total.toString()
    }else if(answer === "n") {
        total = 0
        score.innerHTML = total.toString()
    }else
        score.innerHTML = "Invalid Input"
    total = 0

    return total
}
function c10_output() {
    let answer = document.getElementById("c10_answer").value
    let score = document.getElementById("c10_score")
    let value = parseInt(answer)
    let max_percent = 14
    let total = 0;
    if(isNaN(value))
        score.innerHTML = "Invalid Input";
    else
        if (value < max_percent) {
            total = (value / max_percent) * 5;
            console.log(total)
        }else
            total = 5;
        total = Math.floor(total * 100) / 100
        score.innerHTML = total.toString()
    return total
}
function c_total_output() {
    let c1_score = c1_output()
    let c2_score = c2_output()
    let c3_score = c3_output()
    let c4_score = c4_output()
    let c5_score = c5_output()
    let c6_score = c6_output()
    let c7_score = c7_output()
    let c8_score = c8_output()
    let c9_score = c9_output()
    let c10_score = c10_output()


    let score = document.getElementById("c_score")
    let total = c1_score + c2_score + c3_score +
                c4_score + c5_score + c6_score +
                c7_score + c8_score +
                c9_score + c10_score
    if(isNaN(total))
        score.innerHTML = "Invalid Input"
    else
        score.innerHTML = total.toString()
}