/*
given an unsorted array, create a function that implement selection sort to sort the array. You are not allowed to create a new array and you have to modify the original input aray

https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/
*/

function selectionSort(arr){
    for (let i=0; i < arr.length; i++) {
        let max = 0;
        for (let j=1; j < arr.length-i; j++) {
            if (arr[j] > arr[max]) {
                max = j;
            }
        }
        [arr[max], arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[max]];
    }
    return arr
}

console.log(selectionSort([5,7,2,9,1,4]))