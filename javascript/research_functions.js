//
// function r1_output() {
//     let max_percent = 20;
//     let answer = document.getElementById("r1_answer").value;
//     let score = document.getElementById("r1_score");
//     let value = parseInt(answer);
//     let total = 0;
//     if(isNaN(value))
//         score.innerHTML = "Invalid Input";
//     else
//         if (value < max_percent) {
//             total = (value / max_percent) * 5;
//             console.log(total);
//         }else
//             total = 5;
//         score.innerHTML = total.toString();
//     return total
// }
// function r2_output() {
//
//     let answer = document.getElementById("r2_answer").value;
//     let score = document.getElementById("r2_score");
//     let value = parseInt(answer);
//     let max_percent = 15;
//     let total = 0;
//     if(isNaN(value))
//         score.innerHTML = "Invalid Input";
//     else
//     if (value < max_percent) {
//         total = (value / max_percent) * 5;
//         console.log(total);
//     }else
//         total = 5;
//     score.innerHTML = total.toString();
//     return total
// }
// function r3_output() {
//     let answer = document.getElementById("r3_answer").value;
//     let score = document.getElementById("r3_score");
//     let value = parseInt(answer);
//     let max_percent = 32;
//     let total = 0;
//     if(isNaN(value))
//         score.innerHTML = "Invalid Input";
//     else
//     if (value < max_percent) {
//         total = (value / max_percent) * 5;
//         console.log(total);
//     }else
//         total = 5;
//     score.innerHTML = total.toString();
//     return total
// }
// function r4_output() {
//     let answer = document.getElementById("r4_answer").value;
//     let score = document.getElementById("r4_score");
//     let value = parseInt(answer);
//     let max_percent = 60;
//     let total = 0;
//     if(isNaN(value))
//         score.innerHTML = "Invalid Input";
//     else
//     if (value < max_percent) {
//         total = (value / max_percent) * 5;
//         console.log(total);
//     }else
//         total = 5;
//     score.innerHTML = total.toString();
//     return total
// }
// function r5_output() {
//     let answer = document.getElementsByName("r5_answer");
//     let score = document.getElementById("r5_score");
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
// function r6_output() {
//     let answer = document.getElementsByName("r6_answer");
//     let score = document.getElementById("r6_score");
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
//
// }
// function r7_output() {
//     let answer = document.getElementsByName("r7_answer");
//     let score = document.getElementById("r7_score");
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
// function r8_output() {
//     let answer = document.getElementsByName("r8_answer");
//     let score = document.getElementById("r8_score");
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
// function r9_output() {
//     let answer = document.getElementsByName("r9_answer");
//     let score = document.getElementById("r9_score");
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
// function r10_output() {
//     let answer = document.getElementsByName("r10_answer");
//     let score = document.getElementById("r10_score");
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
// function r_total_output() {
//     let r1_score = r1_output();
//     let r2_score = r2_output();
//     let r3_score = r3_output();
//     let r4_score = r4_output();
//     let r5_score = r5_output();
//     let r6_score = r6_output();
//     let r7_score = r7_output();
//     let r8_score = r8_output();
//     let r9_score = r9_output();
//     let r10_score = r10_output();
//
//
//     let score = document.getElementById("r_score");
//     let total = r1_score + r2_score + r3_score +
//         r4_score + r5_score + r6_score +
//         r7_score + r8_score +
//         r9_score + r10_score;
//     if(isNaN(total))
//         score.innerHTML = "Invalid Input";
//     else
//         score.innerHTML = total.toString()
// }