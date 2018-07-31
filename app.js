function palindromes (str){
    var removeChar = /[^A-Za-z0-9]/g;
    var strTransform = str.toLowerCase().replace(removeChar, "");
    var strRev = strTransform.split('').reverse().join('');

    if (strTransform === strRev){
      console.log("Yea, this is a palindrome");
      return true
    }
    else {
      console.log("Nope, this aint no palindrome");
      return false
    }
}

palindromes("Raymond");
