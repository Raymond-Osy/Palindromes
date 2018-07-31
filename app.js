var checkBtn = document.getElementById('check');

checkBtn.onclick = function (){
  var str = document.getElementById('palindrome').value;
    var removeChar = /[^A-Za-z0-9]/g;
    var strTransform = str.toLowerCase().replace(removeChar, "");
    var strRev = strTransform.split('').reverse().join('');

    if (strTransform === strRev){
      alert("Yea, this is a palindrome");
      return true
    }
    else {
      alert("Nope, this aint no palindrome");
      return false
    }
}

