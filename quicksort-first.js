let count = 0

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};


function quickSort(array, start = 0, end = array.length) {
    console.log('quickSort', count, '-', array)
    count++

    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle - 1);
    array = quickSort(array, middle + 1, end);
    return array;
};

function partition(array, start, end) {
    swap(array, end -1, start)
    const pivot = array[end - 1]

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
quickSort(quickArr, 0, quickArr.length - 1);


// look at 3 elements
// choose middle between of the 3


// make sure whether you pick left middle or right middle, 
// you are still correct