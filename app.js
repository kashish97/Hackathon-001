

  
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

    var arr = [];
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
            errorsText.forEach(element => 
                arr.push(element.bad)
                );
                document.getElementById('myTextArea').innerHTML = transformContent(text,arr);
            }
           })

    .catch(err => console.log('Request Failed', err)); 
    console.log(errors);
  }
        

  function transformContent(content, keywords){
    let temp = content;
  
    keywords.forEach(keyword => {
      temp = temp.replace(new RegExp(keyword, 'ig'), wrapKeywordWithHTML(keyword))
    })
  
    return temp;
  }
  
  function wrapKeywordWithHTML(keyword){
    return `<span style=" text-decoration: underline;text-decoration-color: red;">  ${keyword}</span>`
  }

  var notepad = document.getElementById("myTextArea");

  notepad.addEventListener("contextmenu",function(event){
      event.preventDefault();
      var ctxMenu = document.getElementById("ctxMenu");
      ctxMenu.style.display = "block";
      ctxMenu.style.left = (event.pageX - 10)+"px";
      ctxMenu.style.top = (event.pageY - 10)+"px";
  },false);


  notepad.addEventListener("click",function(event){
      var ctxMenu = document.getElementById("ctxMenu");
      ctxMenu.style.display = "";
      ctxMenu.style.left = "";
      ctxMenu.style.top = "";
  },false);