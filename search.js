function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}

//big-o = O(n)
// const arr = [1, 2, 3, 4, 5, 6];
// const item = 8;
// const index = linearSearch(arr, item);
// // console.log(index);

function binarySearch(arr, item) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === item) {
      return mid;
    } else if (arr[mid] < item) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

// const arr = [1, 2, 3, 4, 5, 6];
//
// //Big-O = O(log n)
// console.log(binarySearch(arr, 3));
// console.log(binarySearch(arr, 4));
// console.log(binarySearch(arr, 10));
// console.log(binarySearch([], 10));

//recursive
function recursiveSearch(arr, item) {
  return search(arr, item, 0, arr.length - 1);
}

function search(arr, item, low, high) {
  if (low > high) {
    return -1;
  }
  const mid = Math.floor((low + high) / 2);
  if (arr[mid] === item) {
    return mid;
  } else if (arr[mid] < item) {
    return search(arr, item, mid + 1, high);
  } else {
    return search(arr, item, low, mid - 1);
  }
}

//Big-O = O(log n)
const arr = [1, 2, 3, 4, 5, 6];
console.log(recursiveSearch(arr, 3));
console.log(recursiveSearch(arr, 4));
console.log(recursiveSearch(arr, 10));
