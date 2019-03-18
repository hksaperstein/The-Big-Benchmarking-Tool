
// function c2_output() {
//
//     let answer = document.getElementById("c2_answer").value;
//     let score = document.getElementById("c2_score");
//     let value = parseInt(answer);
//     let max_percent = 20;
//     let total = 0;
//     if(isNaN(value))
//         score.innerHTML = "Invalid Input";
//     else
//         if (value < max_percent) {
//             total = (value / max_percent) * 5;
//             console.log(total)
//         }else
//             total = 5;
//         score.innerHTML = total.toString();
//     return total
// }
// function c3_output() {
//     let answer = document.getElementById("c3_answer").value;
//     let score = document.getElementById("c3_score");
//     let value = parseInt(answer);
//     let max_percent = 80;
//     let total = 0;
//     if(isNaN(value))
//         score.innerHTML = "Invalid Input";
//     else
//         if (value < max_percent) {
//             total = (value / max_percent) * 5;
//             console.log(total)
//         }else
//             total = 5;
//         score.innerHTML = total.toString();
//     return total
// }
// function c4_output() {
//     let answer = document.getElementById("c4_answer").value;
//     let score = document.getElementById("c4_score");
//     let value = parseInt(answer);
//     let max_percent = 80;
//     let total = 0;
//     if(isNaN(value))
//         score.innerHTML = "Invalid Input";
//     else
//         if (value < max_percent) {
//             total = (value / max_percent) * 5;
//             console.log(total)
//         }else
//             total = 5;
//         score.innerHTML = total.toString();
//     return total
// }
// function c5_output() {
//     let answer = document.getElementById("c5_answer").value;
//     let score = document.getElementById("c5_score");
//     let value = parseInt(answer);
//     let total = 0;
//     if(isNaN(value))
//         score.innerHTML = "Invalid Input";
//     else
//         if(value <= 3)
//             total = value;
//         else
//             total = 4;
//         score.innerHTML = total.toString();
//     return total
// }
// function c6_output() {
//     let answer = document.getElementsByName("c6_answer");
//     let score = document.getElementById("c6_score");
//     let yes = answer[0].checked;
//     let no = answer[1].checked;
//     let total;
//     if (yes) {
//         total = 3;
//         score.innerHTML = total.toString()
//     }else if(no) {
//         total = 0;
//         score.innerHTML = total.toString()
//     }
//     return total
//
// }
// function c7_output() {
//     let answer = document.getElementById("c7_answer").value;
//     let score = document.getElementById("c7_score");
//     let value = parseInt(answer);
//     let total = 0;
//     if(isNaN(value))
//         score.innerHTML = "Invalid Input";
//     else {
//         if (value <= 2)
//             total = value;
//         else
//             total = 3;
//         score.innerHTML = total.toString();
//     }
//     return total
// }
// function c8_output() {
//     let answer = document.getElementById("c8_answer").value;
//     let score = document.getElementById("c8_score");
//     let value = parseInt(answer);
//     let max_percent = 80;
//     let total = 0;
//     if(isNaN(value))
//         score.innerHTML = "Invalid Input";
//     else
//         if (value < max_percent) {
//             total = (value / max_percent) * 5;
//             console.log(total)
//         }else
//             total = 5;
//         score.innerHTML = total.toString();
//     return total
// }
// function c9_output() {
//     let answer = document.getElementsByName("c9_answer");
//     let score = document.getElementById("c9_score");
//     let yes = answer[0].checked;
//     let no = answer[1].checked;
//     let total;
//     if (yes) {
//         total = 5;
//         score.innerHTML = total.toString();
//     }else if(no) {
//         total = 0;
//         score.innerHTML = total.toString();
//     }
//     return total;
// }
// function c10_output() {
//     let answer = document.getElementById("c10_answer").value;
//     let score = document.getElementById("c10_score");
//     let value = parseInt(answer);
//     let max_percent = 14;
//     let total = 0;
//     if(isNaN(value))
//         score.innerHTML = "Invalid Input";
//     else
//         if (value < max_percent) {
//             total = (value / max_percent) * 5;
//             console.log(total)
//         }else
//             total = 5;
//         total = Math.floor(total * 100) / 100;
//         score.innerHTML = total.toString();
//     return total
// }
//
// function c_total_output() {
//     let c1_score = max_val_output(20, "c1_answer", "c1_score");
//     let c2_score = max_val_output(20, "c2_answer", "c2_score");
//     let c3_score = max_val_output(80, "c3_answer", "c3_score");
//     let c4_score = max_val_output(80, "c4_answer", "c4_score");
//     let c5_score = max_val_output(4, "c5_answer", "c5_score");
//     let c6_score = yes_no_output(3, "c6_answer", "c6_score");
//     let c7_score = max_val_output(3, "c7_answer", "c7_score");
//     let c8_score = max_val_output(80, "c8_answer", "c8_score");
//     let c9_score = yes_no_output(5, "c9_answer", "c9_score");
//     let c10_score = max_val_output(15, "c10_answer", "c10_score");
//
//
//     let score = document.getElementById("c_score");
//     let total = c1_score + c2_score + c3_score +
//                 c4_score + c5_score + c6_score +
//                 c7_score + c8_score +
//                 c9_score + c10_score;
//     if(isNaN(total))
//         score.innerHTML = "Invalid Input";
//     else
//         score.innerHTML = total.toString()
// }

function max_val_output(max_value, input_id, output_id){
    let answer = document.getElementById(input_id).value;
    let score = document.getElementById(output_id);
    let value = parseInt(answer);
    let total = 0;
    if(isNaN(value))
        score.innerHTML = "Invalid Input";
    else

    if (value < max_value) {
        total = (value / max_value) * 5;
        console.log(total)
    }else
        total = 5;
    score.innerHTML = total.toString();
    return total
}
function yes_no_output(value, input_id, output_id){
    let answer = document.getElementsByName(input_id);
    let score = document.getElementById(output_id);
    let yes = answer[0].checked;
    let no = answer[1].checked;
    let total;
    if (yes) {
        total = value;
        score.innerHTML = total.toString()
    }else if(no) {
        total = 0;
        score.innerHTML = total.toString()
    }
    return total
}