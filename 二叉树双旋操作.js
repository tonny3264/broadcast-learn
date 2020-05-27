// 基本数据
function Node(value){
  this.value = value;
  this.left = null;
  this.right = null;
}
const n8 = new Node(8);
const n7 = new Node(7);
const n6 = new Node(6);
const n5 = new Node(5);
const n4 = new Node(4);
n8.left = n7;
n7.left = n6;
n6.left = n5;
n5.left = n4;

// 树的深度
function deep(root){
  if(root == null) return 0;
  const left = deep(root.left);
  const right = deep(root.right);
  return Math.max(left, right) + 1;
}

// console.log(deep(n8));

// 是否是平衡树
function isBanlance(root){
  if(root == null) return true;
  const left = deep(root.left);
  const right = deep(root.right);
  if(Math.abs(left - right) > 1){
    return false;
  }else{
    return isBanlance(root.left) && isBanlance(root.right);
  }
}

// console.log(isBanlance(n6));

// 左单旋
function leftRotate(root){
  const newRoot = root.right;
  const change = newRoot.left;
  newRoot.left = root;
  root.right = change;
  return newRoot;
}

// 右单旋
function rightRotate(root){
  const newRoot = root.left;
  const change = newRoot.right;
  newRoot.right = root;
  root.left = change;
  return newRoot;
}

// 更改二叉树
function change(root){
  if(root == null) return null;
  if(isBanlance(root)) return root;
  if(root.left != null) root.left = change(root.left);
  if(root.right != null) root.right = change(root.right);
  const left = deep(root.left);
  const right = deep(root.right);
  if(Math.abs(left - right) < 2){
    return root;
  }
  // 右旋操作
  if(left > right){
    // 判定是否要双旋
    const leftNewRootDeep = deep(root.left.left);
    const rightNewRootDeep = deep(root.left.right);
    if(leftNewRootDeep < rightNewRootDeep){
      root.left = leftRotate(root.left);
    }
    return rightRotate(root);
  }
  // 左旋操作
  else {
    // 判定是否要双旋
    const leftNewRootDeep = deep(root.right.right);
    const rightNewRootDeep = deep(root.right.left);
    if(leftNewRootDeep > rightNewRootDeep){
      root.left = rightRotate(root.left);
    }
    return leftRotate(root);
  }
}

change(n8);
console.log(isBanlance(n8));