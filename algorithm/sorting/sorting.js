//selection sort
const bubbleSort = (arr) => {
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n - i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

//selection sort
const selectionSort = (arr) => {
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i + 1; j < n; j++) {
            min = arr[j] < arr[min] ? j : min;
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

//insertion sort
const insertionSort = (arr) => {
    let n = arr.length;
    for(let i = 1; i < n; i++) {
        for(let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr.splice(i, 1);
                arr.splice(j, 0, temp[0]);
            }
        }
    }
    return arr;
}

//merge sort
function merge(left, right) {
    let i = 0, j = 0, c = [];
    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            c.push(left[i]);
            i++;
        } else {
            c.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        c.push(left[i])
        i++;
    }
    while (j < right.length) {
        c.push(right[j])
        j++;
    }
    return c;
}
function mergeSort(arr) {
    if (arr.length === 1) return arr;
    let midPoint = Math.ceil(arr.length / 2);
    let leftArray = arr.slice(0, midPoint);
    let rightArray = arr.slice(midPoint, arr.length);
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

// Quick Sort
function quickSort(arr) {
    if(arr.length === 1) return arr;
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0 ; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    if (left.length > 0 && right.length > 0) {
        return [...quickSort(left), pivot, ...quickSort(right)];
    } else if (left.length > 0) {
        return [...quickSort(left), pivot];
    } else  {
        return [pivot, ...quickSort(right)];
    } 
}