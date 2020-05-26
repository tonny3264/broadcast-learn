Array.prototype.isSymetric = function(){
    let left, right;
    let mid = parseInt(arr.length / 2);
    if(arr.length % 2 === 0){
        left = mid - 1;
        right = mid;
    }else{
        left = mid - 1;
        right = mid + 1;
    }
    while(left >= 0){
        if(arr[left] !== arr[right]){
            return false;
        }
        left--;
        right++;
    }
    return true;
}

const arr = [1, 2, 3, 2, 1, 0];
console.log(arr.isSymetric());