function open_modal(index, id){
    document.getElementById(id).style.display='block';
    document.getElementsByClassName("tablink")[index-1].click()
}
function close_modal(id){
    document.getElementById(id).style.display='none';
}

function open_question(evt, questionNumber) {
    var i, x, tablinks;
    x = document.getElementsByClassName("question");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].classList.remove("w3-light-grey");
    }
    document.getElementById(questionNumber).style.display = "block";
    evt.currentTarget.classList.add("w3-light-grey");
}




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
            total = (value / max_percent) * 10;
            console.log(total);
        }else
            total = 10;
        score.innerHTML = "Score: " + total.toString() + " out of 10";
    return total
}
function c2_output() {

    let answer = document.getElementById("c2_answer").value;
    let score = document.getElementById("c2_score");
    let value = parseInt(answer);
    let max_percent = 20;
    let total = 0;
    if(isNaN(value))
        score.innerHTML = "Invalid Input";
    else {
        if (value < max_percent) {
            total = (value / max_percent) * 5;
            console.log(total);
        } else
            total = 5;
        score.innerHTML = "Score: " + total.toString() + " out of 5";
    }
    return total
}
function c3_output() {
    let answer = document.getElementById("c3_answer").value;
    let score = document.getElementById("c3_score");
    let value = parseInt(answer);
    let max_percent = 50;
    let total = 0;
    if(isNaN(value))
        score.innerHTML = "Invalid Input";
    else {
        if (value < max_percent) {
            total = (value / max_percent) * 10;
            console.log(total);
        } else
            total = 10;
        score.innerHTML = "Score: " + total.toString() + " out of 10";
    }
    return total
}
function c4_output() {
    let answer = document.getElementById("c4_answer").value;
    let score = document.getElementById("c4_score");
    let value = parseInt(answer);
    let max_percent = 50;
    let total = 0;
    if(isNaN(value))
        score.innerHTML = "Invalid Input";
    else {
        if (value < max_percent) {
            total = (value / max_percent) * 10;
            console.log(total);
        } else
            total = 10;
        score.innerHTML = "Score: " + total.toString() + " out of 10";
    }
    return total
}
function c5_output() {
    let answer = document.getElementById("c5_answer").value;
    let score = document.getElementById("c5_score");
    let value = parseInt(answer);
    let max_value = 4;
    let total = 0;
    if(isNaN(value))
        score.innerHTML = "Invalid Input";
    else {
        if (value >= max_value) {
            total = 4
        } else
            total = value;
        score.innerHTML = "Score: " + total.toString() + " out of 4";
    }
        return total
}
function c6_output() {
    let answer = document.getElementsByName("c6_answer");
    let score = document.getElementById("c6_score");
    let yes = answer[0].checked;
    let no = answer[1].checked;
    let total;
    if (yes) {
        total = 3;
        score.innerHTML = "Score: " + total.toString() + " out of 3";
    }else if(no) {
        total = 0;
        score.innerHTML = "Score: " + total.toString() + " out of 3";
    }
    return total;

}
function c7_output() {
    let answer = document.getElementById("c7_answer").value;
    let score = document.getElementById("c7_score");
    let value = parseInt(answer);
    let max_value = 3;
    let total = 0;
    if(isNaN(value))
        score.innerHTML = "Invalid Input";
    else {
        if (value >= max_value) {
            total = 3
        } else
            total = value;
        score.innerHTML = "Score: " + total.toString() + " out of 3";
    }
    return total
}
function c8_output() {
    let answer = document.getElementsByName("c8_answer");
    let score = document.getElementById("c8_score");
    let yes = answer[0].checked;
    let no = answer[1].checked;
    let total;
    if (yes) {
        total = 3;
        score.innerHTML = "Score: " + total.toString() + " out of 3";
    }else if(no) {
        total = 0;
        score.innerHTML = "Score: " + total.toString() + " out of 3";
    }
    return total;
}
function c9_output() {
    let answer = document.getElementsByName("c9_answer");
    let score = document.getElementById("c9_score");
    let yes = answer[0].checked;
    let no = answer[1].checked;
    let total;
    if (yes) {
        total = 3;
        score.innerHTML = "Score: " + total.toString() + " out of 3";
    }else if(no) {
        total = 0;
        score.innerHTML = "Score: " + total.toString() + " out of 3";
    }
    return total;
}

function c10_output() {
    let answer = document.getElementsByName("c10_answer");
    let score = document.getElementById("c10_score");
    let value = 0;
    let total = 0;
    for(let i = 0; i<17; i++){
        console.log(answer[i].checked);
        if (answer[i].checked){
            value++;
        }
    }
    if (value < 13) {
        total = (value / 13) * 5;
        console.log(total);
    } else
        total = 5;
    score.innerHTML = "Score: " + total.toString() + " out of 5";

    return total;
}


function c_total_output() {
    let c1_score = c1_output();
    let c2_score = c2_output();
    let c3_score = c3_output();
    let c4_score = c4_output();
    let c5_score = c5_output();
    let c6_score = c6_output();
    let c7_score = c7_output();
    let c8_score = c8_output();
    let c9_score = c9_output();
    let c10_score = c10_output();

    let score = document.getElementById("c_score");
    let total = c1_score + c2_score + c3_score +
        c4_score + c5_score + c6_score +
        c7_score + c8_score +
        c9_score + c10_score;
    if(isNaN(total))
        score.innerHTML = "Invalid Input";
    else
        score.innerHTML = "Score: " + total.toString() + " out of 50";
}