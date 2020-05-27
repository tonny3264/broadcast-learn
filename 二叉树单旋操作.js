function Node(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

const n5 = new Node(5);
const n6 = new Node(6);
const n7 = new Node(7);
const n8 = new Node(8);

n5.right = n7;
n7.left = n6;
n7.right = n8;

function deep(root){
  if(root == null) return 0;
  let leftDeep = deep(root.left);
  let rightDeep = deep(root.right);
  return Math.max(leftDeep, rightDeep) + 1;
}

function leftRotate(root){
  let newRoot = root.right;
  let change = newRoot.left;
  newRoot.left = root;
  root.right = change;
  return newRoot;
}

function rightRotate(root){
  let newRoot = root.left;
  let change = newRoot.right;
  newRoot.right = root;
  root.left = change;
  return newRoot;
}

/**
 * 判断是否是平衡二叉树 
 * @param {*} root 
 */
function isBanlance(root){
  if(root == null) return true;
  let leftDeep = deep(root.left);
  let rightDeep = deep(root.right);
  if(Math.abs(leftDeep - rightDeep) > 1){
    return false;
  }else{
    return isBanlance(root.left) && isBanlance(root.right);
  }
}

/**
 * 单选操作
 * @param {*} root 
 */
function treeRotate(root){
  if(root == null) return null;
  if(isBanlance(root)) return root;
  // 先递归到底, 从下往上判断(后续遍历)
  if(root.left != null) root.left = treeRotate(root.left);
  if(root.right != null) root.right = treeRotate(root.right);
  let leftDeep = deep(root.left);
  let rightDeep = deep(root.right);
  if(Math.abs(leftDeep - rightDeep) < 2){
    return root;
  }else if(leftDeep > rightDeep){
    return rightRotate(root);
  }else{
    return leftRotate(root);
  }
}

console.log(isBanlance(n5), isBanlance(treeRotate(n5)));