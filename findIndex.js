Array.prototype.index = function(val){
    let start = -1,
        end = this.length,
        mid;
    while(start <= end){
        mid = parseInt((end - start) / 2 + start);
        if(val == this[mid]){
            return mid;
        }else if(val < this[mid]){
            end = mid;
        }else{
            start = mid;
        }
    }
    return -1;
}

console.log([1,2].index(2));