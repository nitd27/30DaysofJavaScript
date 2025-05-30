let str = "The quick brown fox jumps over the lazy dog";
console.log(whatslongest(str));

function whatslongest(str){
    
    let words = str.split(" "); // split string into arr
    let longest = words[0]; //initialize longest word holder with 1st word
    //console.log(words); // look at arr
    
    for(let i=0; i<words.length; i++){
        
        //console.log(`Length of ${words[i]} is ${words[i].length}`)//len of words
        
 //condition, its ">" so value of longest will only update when even bigger word is found, else it'll stick to first longest word.
//eg, quick, brown, jumps, all are 5char but code concider quick longest.
        if(words[i].length > longest.length){
            longest = words[i];
        }
        else{continue}
    }
    return longest;
    
    
}
// It returns the first longest word because the condition " > " only updates longest when a strictly longer word is found, not when lengths are equal.
// Hence, if multiple words have the same max length, the first one encountered is retained.

