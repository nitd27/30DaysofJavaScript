let str = "hi";
console.log(isPalindrome(str));



function isPalindrome(str) {
    let reverse = "";
    for(let i = 1; i<=str.length; i++){
        reverse = reverse + str[str.length-i] //1-2 = 1--i; 2-2 = 0--h, ih //hi
    }
    //console.log(`orginal = ${str} &  reversed = ${reverse}`); //to check
    if(reverse === str){return true}
    else {return false};
}
