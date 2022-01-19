//create a function that accepts a string and a number as an input, and the function will return the string rotated by the amount in the number input


function rotateStr(str, num){

}


console.log(rotateStr("abcde", 2)) //deabc
console.log(rotateStr("abcdefg", 5)) //cdefgab
console.log(rotateStr("abcdefg", 10)) //efgabcd





//given two strings, return true if they are rotations of one another. return false if they are not
function isRotation(str1,str2){

}

console.log(isRotation("abcde", "deabc")) //true
console.log(isRotation("abcde", "edacb")) //false

let rotateString = function(str, num){
    let start = 0
    let end = str.length
    let endString = str.slice(end-num, end)
    let startString = str.slice(start, end-num)
    let returnString = endString + startString
    return returnString
}
console.log(rotateString("abcde", 2)) // "deabc"

let isRotation = function(str1, str2){
    for(let i = 1;i<=str1.length;i++){
        let checkString = rotateString(str1, i)
        if(checkString == str2) return true;
    }
    return false
}
console.log(isRotation("abcde", "deabc"))