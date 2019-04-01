function open_modal(index, id){
    document.getElementById(id).style.display='block';
    document.getElementsByClassName("modal_tablink")[index-1].click()
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
    tabs = document.getElementsByClassName("modal_tablink");
    for (i = 0; i < x.length; i++) {
        tabs[i].classList.remove("w3-light-grey");
    }
    document.getElementById(question_number).style.display = "block";
    event.currentTarget.classList.add("w3-light-grey");

}

function run_curriculum(){}