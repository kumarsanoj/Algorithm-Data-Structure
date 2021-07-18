//solution 1 : nested for loop
function findMinTwoSum(arr) {
    if (Array.isArray(arr) && arr.length > 1) {
        let minSum = arr[0] + arr[1];
        for(let i = 0; i < arr.length; i++) {
            for(let j = i+1; j < arr.length; j++) {
                let sum = arr[i] + arr[j];
                if (sum < minSum) {
                    minSum = sum;
                }
            }
        }
        return minSum;
    }
}
//solution 2:
//have two variable to store minimum two values from array
//initialise with firstMinVal = a[0] and secondMinValue = a[1]