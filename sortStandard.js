function swap(arr, prev, next){
    let temp = arr[prev];
    arr[prev] = arr[next];
    arr[next] = temp;
}

function sort(arr, begin, end){
    if(begin >= end - 1) return;
    let left = begin;
    let right = end;
    do {
        do {left++;} while (left < right && arr[left] < arr[begin]);
        do {right--;} while (left < right && arr[right] > arr[begin]);
        if(left < right) swap(arr, left, right);
    }while(left < right);
    let swapBegin = left == right ? right - 1 : right;
    swap(arr, begin, swapBegin);
    sort(arr, begin, swapBegin);
    sort(arr, swapBegin + 1, end);
    console.log(left, right);
}
const arr = [6, 8, 1, 4, 3, 2, 7];
sort(arr, 0, arr.length);
console.log(arr);