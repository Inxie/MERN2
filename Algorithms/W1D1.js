/*
given an unsorted array, create a function that implement bubble sort to sort the array. You are not allowed to create a new array and you have to modify the original input aray

https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
*/

function bubbleSort(arr){
    for(var i = 0; i<arr.length; i++){
        for(var j =0; j<arr.length-1-i; j++){
            if(arr[j] > arr [j+1]) {
                temp = arr[j]
                arr[j]= arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort([5,7,2,9,1,4]))