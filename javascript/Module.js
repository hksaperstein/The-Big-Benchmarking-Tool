class Module{
    constructor(code,title, description) {
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

function createModule() {

    let file = document.getElementById("curriculum_file").value;
    alert(file);
    let file_desriptor = "file:///" + file
    alert(file_desriptor)

    // let module = new Module(
    //     "this",
    //     " is ",
    //     "a test"
    // );
    //
    // alert(module.getCode() +
    //     module.getTitle() +
    //     module.getDescription());
    //
    // module.setCode("it ");
    // module.setTitle("clearly ");
    // module.setDescription("works");
    //
    // alert(module.getCode() +
    //     module.getTitle() +
    //     module.getDescription());


}
