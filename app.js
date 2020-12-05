

function addFileTextToTextArea(event){

    event.preventDefault();
    var file = document.getElementById("myFile").files[0];
   
    if(!validateFile(file.name)){
        alert("Please upload a valid file");
        return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
    var textArea = document.getElementById("myTextArea");
    textArea.value = e.target.result;
    spellCheck(e.target.result);
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

  function spellCheck(text){

    let base_url = "https://api.textgears.com/grammar?key=1gVny1rfj02gy7kY&text="+text;
    let fetchData = {
        method: 'GET',
        headers: new Headers()
    }

    fetch(base_url,fetchData)
    .then(response => response.json())
    .then(json => console.log(json))    
    .catch(err => console.log('Request Failed', err)); 

  }