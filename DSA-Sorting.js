let count = 0

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};



function bubbleSort(array) {
    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }

    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
};



function mSort(array) {
    console.log('mergeSort', count, '-', array)
    count++

    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mSort(left);
    right = mSort(right);
    return merge(left, right, array);
};

function merge(left, right, array) {

    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            // console.log('left', array[outputIndex++] = left[leftIndex++])
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            // console.log('right', array[outputIndex++] = right[rightIndex++])
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    
    console.log('merge', count, '-', array)
    count++
    return array;
};


const mergeArr = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]

// console.log(mSort(mergeArr))



function qSort(array, start = 0, end = array.length) {
    console.log('quickSort', count, '-', array)
    count++

    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = qSort(array, start, middle);
    array = qSort(array, middle + 1, end);
    return array;
};

function partition(array, start, end) {
    const pivot = array[end - 1];

    let j = start
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    console.log('partition', count, '-', array)
    count++
    return j;
};

let quickArr = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12]

// console.log(qSort(quickArr))


let implementSortArr = [
    89, 30, 25, 32, 72, 70, 51, 42, 25, 24,
    53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 
    14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 
    15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 
    65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 
    9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 
    13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 
    69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 
    46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 
    54, 84, 34, 53, 78, 40, 14, 5
]

// console.log(qSort(implementSortArr))
// console.log(mSort(implementSortArr))



function bucketSort(arr, min, max) {
    const buckets = Array((max - min) + 1).fill(0);

    let bucket; 

    for (let i = 0; i < arr.length; i++) {
        bucket = arr[i] - min;
        buckets[bucket] += 1;
    }

    const results = [];

    for (let i = 0; i < buckets.length; i++) {
        let total = buckets[i];
        let num = i + min;

        for (let j = 0; j < total; j++) {
            results.push(num);
        }
    }
    return results;
}

let bucketArr = [100, 25, 75, 50, 125, 150, 100]

console.log(bucketSort(bucketArr, 25, 150));



function sortInPlace(arr) {
    for (let i = 0; i < arr.length; i++) {
        let randomOrder = Math.floor(Math.random() * arr.length);
        swap(arr, i, randomOrder);
    }
    return arr;
}

let sortArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sortInPlace(sortArr))



function mSortingBooks(array) {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);
    left = mSortingBooks(left);
    right = mSortingBooks(right);
    return mergeBooksArray(left, right, array);
}

function mergeBooksArray(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
        array[outputIndex++] = left[leftIndex++];
        } else {
        array[outputIndex++] = right[rightIndex++];
        }
    }
    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }
    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }

    return array;
}



const bookArray = [
'Leviathan Wakes',
'Calibans War',
'Abaddons Gate',
'Cibola Burn',
'Nemesis Games',
'Babylons Ashes',
'Presepolis Rising',
'Tiamats Wrath',
'Harry Potter and the Chamber of Secrets',
'Harry Potter and the Sorceror\'s Stone',
'Harry Potter and the Goblet of Fire',
'Harry Potter and the Order of the Phoenix',
'Harry Potter and the Deathly Hallows Part 1',
'Harry Potter and the Deathly Hallows Part 2',
'Harry Potter and the Prisoner of Azkaban',
'Harry Potter and the Half Blood Prince'
];

console.log(mSortingBooks(bookArray));