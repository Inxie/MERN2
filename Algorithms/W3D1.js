const intersect = (arr1,arr2)=>{
    let newArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            i++;
        }
        else if (arr2[j] < arr1[i]) {
            j++
        }
        else if (arr1[i] == arr2[j]) {
            newArr.push(arr1[i]);
            i++;
            j++;
        }
    }
    return newArr;
}



//return back a new array containing only the numbers that both arrays have in common. if there are repeats in any, have the output only contain the smallest number of repeats 

console.log(intersect([1,2,3,3,4,4,6], [2,3,4,4,6] )) //[2,3,4,4,6]

/*
[2,3,4,4,6]
*/

console.log(intersect([1,2,3,3,4,4,6], [1,2,3,3,3,3,4,4,6] )) //[1,2,3,3,4,4,6]

/*
[1,2,3,3,4,4,6]
*/