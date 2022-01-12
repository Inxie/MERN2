/*
given an unsorted array, create a function that implement insertion sort to sort the array. You are not allowed to create a new array and you have to modify the original input aray

https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
*/


function insertionSort(arr){
    for (var i=1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) {
            let temp = arr[i];
            for (var j=i; temp < arr[j-1]; j--) {
                arr[j] = arr[j-1];
                }
                arr[j] = temp;
            }
        }
    return arr
}

console.log(insertionSort([5,7,2,9,1,4]))


function insertionSort(arr) {
    for (let i=1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) {
            let temp = arr[i];
            let j=i;
            while (temp < arr[j-1]) {
                arr[j] = arr[j-1];
                j--;
            }
            arr[j] = temp;
        }
    }
    return arr
}

console.log(insertionSort([5,7,2,9,1,4]))