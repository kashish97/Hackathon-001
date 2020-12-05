
function addFileTextToTextArea(event){

    event.preventDefault();

    

    var file = document.getElementById("myFile").files[0];
   
    if(!validateFile(file.name)){
        alert("Please upload a valid file");
    }
    var reader = new FileReader();
    reader.onload = function (e) {
    var textArea = document.getElementById("myTextArea");
    textArea.value = e.target.result;
    };
    reader.readAsText(file);
}

function validateFile(filename) {
    var parts = filename.split('.');
    if(parts[parts.length-1]!="txt"){
        return false;
    }
    return true;
  }