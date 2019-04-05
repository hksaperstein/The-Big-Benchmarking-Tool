class Research {

    constructor(type, title, author, abstract, numSDGs, SDGs){
        this.type = type;
        this.title = title;
        this.author = author;
        this.abstract = abstract;
        this.numSDGs = numSDGs;
        this. SDGs = SDGs;
    }

}

function parse_json_file() {
    let fileUpload = document.getElementById("research_file");

    let regex = /^([a-zA-Z0-9\s_\\.\-:])+(.json|.JSON)$/;
    let json;
    if (regex.test(fileUpload.value.toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            let reader = new FileReader();
            reader.onload = function (e) {
                json = JSON.parse(e.target.result);
                parse_json(json)

            };
            reader.readAsText(fileUpload.files.item(0));


        }

    } else {
        alert("Please upload a valid .json file")
    }
}



function parse_json(json) {
    let sdg_count ={
        
    }
}