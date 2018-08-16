// Get the id's of check and clear button and stored them in a variable
var checkBtn = document.getElementById('check');
var clearBtn = document.getElementById('clearBtn');
//Set the Table to an Empty string
var currentTable ='';

//Once the check button is clicked, it runs all the code contained within the function
checkBtn.onclick = function (){
    var str = document.getElementById('palindrome').value;  //Get the users input
    var removeChar = /[^A-Za-z0-9]/g;  //Remove any character not found within the regular expression(regExp)
    var strTransform = str.toLowerCase().replace(removeChar, "");  //Converts the value to lowercase and replaces the value with RegExp
    var strRev = strTransform.split('').reverse().join('');  //Splits the value into an array, reverse it and rejoin it

    // Conditions for checking the users input
    if (str === ""){
      alert("Please input a word or phrase"); //alert for empty input
    }
    else if (strTransform === strRev){ //Check if converted input equals reversed input
      currentTable +=  //Set input to True and put the input into the empty table
      `<tr>
        <td>${str}</td>
        <td>True</td>
      </tr>`;
      document.getElementById("tBody").innerHTML = currentTable;  //Put the table into the tBody element in HTML
      document.getElementById('palindrome').value = "";  //Clears text box after submitting
    }
    else {   //If not...
      currentTable +=   //Set input to False and put the input into the empty table
      `<tr>
        <td>${str}</td>
        <td>False</td>
      </tr>`;
      document.getElementById("tBody").innerHTML = currentTable;  //Put the table into the tBody element in HTML
      document.getElementById('palindrome').value = "";  //Clears text box after submitting
    }

    // Clears the table once the clear button is clicked
    clearBtn.onclick = function (){
      var x = document.getElementById("tBody");  //Get the tBody HTML element
      x.parentNode.removeChild(x);  //Removes the table
      location.reload();  //Reloads the page
    }
}

