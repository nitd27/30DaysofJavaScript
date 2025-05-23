let a = "hola";
function reverseString(str){
    let string = str.split("");
    string.reverse()
    let rev_str = string.join("")
    return rev_str;
}
 
console.log(reverseString(a))
