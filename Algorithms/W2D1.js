function strToWordArr(str) {
    let result = [];
    let word = "";
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i]);
        if (str[i] === " ") {
            // this finds the first space
            while (str[i] === " ") {
                // skips through any following spaces
                i++;
            }
            if (word != "") {
                result.push(word); // add the word that preceded the space
                word = ""; // reset word
            }
        }
        word += str[i];
    }
    return result;
}
console.log(strToWordArr("  Welcome  to week    two!")) //["Welcome", "to", "week", "two!"]