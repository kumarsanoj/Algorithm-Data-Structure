function recursiveSearchForIndex(arr, start, end,target) {
    if (target < arr[start] || target > arr[end]) {
        return -1;
    }
    let midPoint = Math.floor((start + end)/2);
    if (arr[midPoint] === target) {
        return midPoint;
    } else if (target < arr[midPoint]) {
        return recursiveSearchForIndex(arr, start, midPoint - 1, target)
    } else {
        return recursiveSearchForIndex(arr, midPoint + 1, end, target)
    }
}
function findIndex(arr, start =0, end = arr.length - 1, target) {
    if (start > end) return -1; 
    if(arr.length === 0 || start < 0 || start > arr.length +1) return -1;

    return recursiveSearchForIndex(arr, start, end, target)
}
function getStartAndEndIndexOfBindarySearch(arr, target) {
    let startPos = findIndex(arr, 0, arr.length - 1, target);
    if (startPos === -1) {
        return [-1, -1];
    }
    let start = startPos, end= startPos;
    let temp1, temp2;
    while(start !== -1) {
        temp1 = start;
        start = findIndex(arr, 0, start - 1, target)
    }
    while(end !== -1) {
        temp2 = end;
        end = findIndex(arr, end + 1, arr.length - 1, target)
    }
    return [temp1, temp2]
}
console.log(getStartAndEndIndexOfBindarySearch([1], 1))