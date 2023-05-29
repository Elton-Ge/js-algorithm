//bubble sort    - Big-O = O(n^2)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function bubbleSort2(arr) {
  let swapped = false;
  do {
    for (let i = 0; i < arr.lengt - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

function bubbleSortByDescent(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const arr = [8, 20, -2, 4, -6];
console.log(bubbleSort(arr));
console.log(bubbleSort2(arr));
console.log(bubbleSortByDescent(arr), "descending");

//insertion sort -Big-O = O(n^2)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
}

const arr2 = [8, 20, -2, 4, -6];
console.log(insertionSort(arr2));

function insertionSortDescending(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] < numberToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
}

console.log(insertionSortDescending(arr2), "descending");

//quick sort - Big-O = O(n^2) worst case or O(nlogn) average case
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // return quickSort(left).concat([pivot], quickSort(right));
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([8, 20, -2, 4, -6]), "quick sort");

//merge sort   - O(nlogn)
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}

console.log(mergeSort([8, 20, -2, 4, -6]));
