

function r_total_output() {
    let r1_score = max_val_output(20, 'r1_answer', 'r1_score');
    let r2_score = max_val_output(15, 'r2_answer', 'r2_score');
    let r3_score = max_val_output(32, 'r3_answer', 'r3_score');
    let r4_score = max_val_output(60, 'r4_answer', 'r4_score');
    let r5_score = yes_no_output(5, 'r5_answer', 'r5_score');
    let r6_score = yes_no_output(5, 'r6_answer', 'r6_score');
    let r7_score = yes_no_output(5, 'r7_answer', 'r7_score');
    let r8_score = yes_no_output(5, 'r8_answer', 'r8_score');
    let r9_score = yes_no_output(5, 'r9_answer', 'r9_score');
    let r10_score = yes_no_output(5, 'r10_answer', 'r10_score');


    let score = document.getElementById("r_score");
    let total = r1_score + r2_score + r3_score +
        r4_score + r5_score + r6_score +
        r7_score + r8_score +
        r9_score + r10_score;
    if(isNaN(total))
        score.innerHTML = "Invalid Input";
    else
        score.innerHTML = total.toString()
}

function c_total_output() {
    let c1_score = max_val_output(20, "c1_answer", "c1_score");
    let c2_score = max_val_output(20, "c2_answer", "c2_score");
    let c3_score = max_val_output(80, "c3_answer", "c3_score");
    let c4_score = max_val_output(80, "c4_answer", "c4_score");
    let c5_score = max_val_output(4, "c5_answer", "c5_score");
    let c6_score = yes_no_output(3, "c6_answer", "c6_score");
    let c7_score = max_val_output(3, "c7_answer", "c7_score");
    let c8_score = max_val_output(80, "c8_answer", "c8_score");
    let c9_score = yes_no_output(5, "c9_answer", "c9_score");
    let c10_score = max_val_output(15, "c10_answer", "c10_score");


    let score = document.getElementById("c_score");
    let total = c1_score + c2_score + c3_score +
        c4_score + c5_score + c6_score +
        c7_score + c8_score +
        c9_score + c10_score;
    if(isNaN(total))
        score.innerHTML = "Invalid Input";
    else
        score.innerHTML = total.toString()
}

function max_val_output(max_value, input_id, output_id){
    let answer = document.getElementById(input_id).value;
    let score = document.getElementById(output_id);
    let value = parseInt(answer);
    let total = 0;
    if(isNaN(value))
        score.innerHTML = "Invalid Input";
    else {
        if (value < max_value) {
            total = (value / max_value) * 5;
            console.log(total)
        } else
            total = 5;
        score.innerHTML = total.toString();
    }
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