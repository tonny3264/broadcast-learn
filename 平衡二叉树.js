function Node(value){
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
const h = new Node("H");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
d.right = h;

/**
 * 判断二叉树的深度
 * @param {*} root 根节点
 */
function deep(root){
  if(root == null) return 0;
  let leftDeep = deep(root.left);
  let rightDeep = deep(root.right);
  return Math.max(leftDeep, rightDeep) + 1;
}

/**
 * 判断是否平衡二叉树
 * @param {*} root 根节点
 */
function isBanlance(root){
  if(root == null) return true;
  let leftDeep = deep(root.left);
  let rightDeep = deep(root.right);
  if(Math.abs(leftDeep - rightDeep) > 1){
    return false;
  }
  return isBanlance(root.left) && isBanlance(root.right)
}

console.log(isBanlance(a));