function open_modal(index, id){
    document.getElementById(id).style.display='block';
    document.getElementsByClassName("tab")[index-1].click()
}
function close_modal(id){
    document.getElementById(id).style.display='none';
}

function open_question(event, question_number) {
    let i, x, tabs;
    x = document.getElementsByClassName("question");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        tabs[i].classList.remove("tab");
    }
    document.getElementById(question_number).style.display = "block";
}

function run_curriculum(){}