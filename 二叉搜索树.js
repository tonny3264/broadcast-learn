const arr = [];
for (let i = 0; i < 10000; i++) {
  arr.push(Math.floor(Math.random() * 10000));
}

let n = (m = 0);

function has(arr, target) {
  for (n = 0; n < arr.length; n++) {
    if (arr[n] == target) return true;
  }
  return false;
}

const num = 665;

console.log("普通查询结果为:", has(arr, num), " 查询次数为:", n);

// 二叉搜索树

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function productFindTree(target) {
  if (target == null || target.length == 0) return null;
  const root = new Node(target[0]);
  function addTree(node, num) {
    if (node == null) return;
    if (num == node.value) {
      return;
    } else if (num < node.value) {
      if (node.left == null) {
        node.left = new Node(num);
      } else {
        addTree(node.left, num);
      }
    } else {
      if (node.right == null) {
        node.right = new Node(num);
      } else {
        addTree(node.right, num);
      }
    }
  }
  for (let i = 1; i < target.length; i++) {
    addTree(root, target[i]);
  }
  return root;
}

function treeFind(root, target) {
  m++;
  if (root == null) {
    return false;
  }
  if (root.value == target) {
    return true;
  } else if (target > root.value) {
    return treeFind(root.right, target);
  } else {
    return treeFind(root.left, target);
  }
}

console.log("二叉搜索树查询结果为:", treeFind(productFindTree(arr), num), " 查询次数为:", m);
