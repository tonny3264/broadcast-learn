function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const f = new Node("F");
const g = new Node("G");

a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;
var n = m = 0;

function deepSearch(root, target) {
  if (root == null || target == null) return false;
  let result;
  if (root.value == target) {
    result = true;
  } else {
    result = deepSearch(root.left, target);
    result = result == false ? deepSearch(root.right, target) : result;
  }
  return result;
}

// console.log(deepSearch(a, "F"));
// console.log(deepSearch2(a, "F"));

function widelySearch(root, target){
    if(root == null || target == null) return false;
    function widely(horizons){
        const temps = [];
        let node;
        for(let i = 0; i < horizons.length; i++){
            node = horizons[i];
            console.log(node.value);
            if(node && node.value == target){
                return true;
            }
            if(node.left){
                temps.push(node.left);
            }
            if(node.right){
                temps.push(node.right);
            }
        }
        if(temps.length == 0) return false;
        else return widely(temps);
    }
    return widely([root]);
}

console.log(widelySearch(a, "E"));