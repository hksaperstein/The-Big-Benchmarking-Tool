function open_modal(index){
    document.getElementById('modal').style.display='block';
    document.getElementsByClassName("tab")[index-1].click()
}
function close_modal(){
    document.getElementById('modal').style.display='none';
}

function open_question(event, question_number) {
    var i, x, tabs;
    x = document.getElementsByClassName("question");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        tabs[i].classList.remove("w3-light-grey");
    }
    document.getElementById(question_number).style.display = "block";
    event.currentTarget.classList.add("w3-light-grey");
}