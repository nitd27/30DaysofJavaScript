let string = "Hola";
function reverseString(str) {
    let a = "";
    let done = "";
    for(let i = 1; i<=str.length; i++){
        a = str[str.length-i]
        done = done + a
    }
    return done
}
console.log(reverseString(string))
