class Module{
    constructor(code=null,title=null, description=null) {
        this.code = code;
        this.title = title;
        this.description = description;
    }

    getCode() {
        return this.code;
    }
    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    setCode(code) {
         this.code = code;
    }
    setTitle(title) {
        this.title = title;
    }

    setDescription(description) {
        this.description = description;
    }
}

function parse_csv() {

    let fileUpload = document.getElementById("curriculum_file");

    let regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv)$/;
    let modules = [];

    if (regex.test(fileUpload.value.toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            let reader = new FileReader();
            reader.onload = function (e) {
                let rows = e.target.result.split("\n");
                for(let i = 1; i < rows.length; i++){
                    let cols = rows[i].split(",");
                    let module = new Module();
                    module.setCode(cols[0]);
                    module.setTitle(cols[1]);
                    module.setDescription(cols[2]);
                    modules.push(module)
                }
            };
            reader.readAsText(fileUpload.files.item(0));
        }
    }else{
        alert("Please upload a valid .csv file")
    }

    return modules
}

function parse_keywords(){
    let sdg1_count = 0;




}