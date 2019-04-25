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



function run_curriculum(){}