function mergeArrays(arr1,arr2) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < arr1.length && rightIndex < arr2.length) {
        if (arr1[leftIndex]<arr2[rightIndex]) {
            result.push(arr1[leftIndex]);
            leftIndex++;
        }
        else if (arr1[leftIndex]>arr2[rightIndex]) {
            result.push(arr2[rightIndex]);
            rightIndex++;
        }
        else {
            result.push(arr1[leftIndex])
            leftIndex++;
        }
    }
    while (rightIndex<arr2.length) {
        result.push(arr2[rightIndex])
        rightIndex++;
    }
    while (leftIndex<arr1.length) {
        result.push(arr1[leftIndex])
        leftIndex++;
    }
    return result
}

let arr1 = [1,5,6,6,8,14]
let arr2 = [-3,6,9,10,15]
console.log(mergeArrays(arr1,arr2))