
function disclaimer(page){
    if(!localStorage[page]) {
        if (!window.confirm("By pressing \"OK\" you are agreeing to the University of Worcester's Privacy Policy. For more information, please visit: " + "https://www2.worc.ac.uk/informationassurance/")){
            window.location.href="../html/index.html"
        }
        localStorage[page] = true
    }

}