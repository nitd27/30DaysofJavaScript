//Palindrome check
let str = "level"; //any string which you wanna check for being palindrome, taking level for example.
console.log(palindromeCheck(str)); // passing values


function palindromeCheck(text){ // creating function
    if (text.split("").reverse().join("") === text){ return true;} // splitting text into individual characters, reversing it using array method, joining it back.
    else{return false;}
}
