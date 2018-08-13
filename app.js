var checkBtn = document.getElementById('check');
var currentTable ='';

checkBtn.onclick = function (){
  var inputs =[];

    var str = document.getElementById('palindrome').value;
    var removeChar = /[^A-Za-z0-9]/g;
    var strTransform = str.toLowerCase().replace(removeChar, "");
    var strRev = strTransform.split('').reverse().join('');
    if (str === ""){
      alert("Please input a word or phrase");
      return false
    }
    else if (strTransform === strRev){
      currentTable += `<tr>
      <td>${strTransform}</td>
      <td>True</td>
      </tr>`;
      document.getElementById("tBody").innerHTML = currentTable;
    }
    else {
      currentTable += `<tr>
      <td>${strTransform}</td>
      <td>False</td>
      </tr>`;
      document.getElementById("tBody").innerHTML = currentTable;
    }

  //create a formSubmit function below here
  function addToTable(userInput,status,currentTable){

  }
 
}

