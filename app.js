

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

    let errors;
    let base_url = "https://api.textgears.com/spelling?key=1gVny1rfj02gy7kY&text="+text;
    let fetchData = {
        method: 'GET',
        headers: new Headers()
    }

    fetch(base_url,fetchData)
    .then(response => response.json())
    .then(json => {
        console.log(json);

        var errorsText = json.response.errors;
        if(errorsText.length==0){
            alert("No errors detected in the document");
            return;
        }
        else{
            textarr = text.split(" ");
            console.log("text arr "+textarr);
            for(var txt in textarr){
                for(var elem in errorsText){
                    if(elem!=null && elem.bad!=null && elem.bad!=""){
                        console.log(elem.bad);
                    }
                    if(elem.bad==txt){
                        console.log("Detected errors in "+txt);
                    }

                }
            }
        }
    })    
    .catch(err => console.log('Request Failed', err)); 

    console.log(errors);

    //var errors = jsonResponse.errors;

    // if(errors.length==0){
    //     alert("No errors found in the document");
    // }

  }