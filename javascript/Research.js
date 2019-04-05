function parse_json(){
    let file = document.getElementById("research_file").value;

    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function (theFile) {
        return function (e) {
            console.log('e readAsText = ', e);
            console.log('e readAsText target = ', e.target);
            try {
                json = JSON.parse(e.target.result);
                alert('json global var has been set to parsed json of this file here it is unevaled = \n' + JSON.stringify(json));
            } catch (ex) {
                alert('ex when trying to parse json = ' + ex);
            }
        }
    })

}