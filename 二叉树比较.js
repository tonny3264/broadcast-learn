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
var n = (m = 0);

const a2 = new Node("A");
const b2 = new Node("B");
const c2 = new Node("C");
const d2 = new Node("D");
const e2 = new Node("E");
const f2 = new Node("F");
const g2 = new Node("G");

a2.left = c2;
a2.right = b2;
c2.left = f2;
c2.right = g2;
b2.left = d2;
b2.right = e2;

/**
 * 二叉树比较: 左右子树交换视为不相等
 */
function compare1(tree1, tree2) {
  if (tree1 == tree2) return true;
  if ((tree1 == null && tree2 != null) || (tree1 != null && tree2 == null))
    return false;
  if (tree1.value != tree2.value) return false;
  return compare1(tree1.left, tree2.left) && compare1(tree1.right, tree2.right);
}

/**
 * 左右子树交换视为相等
 */
function compare2(tree1, tree2) {
  if (tree1 == tree2) return true;
  if ((tree1 == null && tree2 != null) || (tree1 != null && tree2 == null))
    return false;
  if (tree1.value != tree2.value) return false;
  return (
    (compare1(tree1.left, tree2.left) && compare1(tree1.right, tree2.right)) ||
    (compare2(tree1.left, tree2.right) && compare2(tree1.right, tree2.left))
  );
}

// console.log(compare2(a, a2));

/**
 * 二叉树diff比较
 * @returns {object} {type: "新增|更改|删除", origin: null|node, now: null|node}
 */
function diff(tree1, tree2) {
  const diffList = [];
  function diffs(t1, t2) {
    if (t1 == t2) return;
    if (t1 == null && t2 !== null)
      diffList.push({ type: "新增", origin: t1, now: t2 });
    else if (t1 !== null && t2 == null)
      diffList.push({ type: "删除", origin: t1, now: t2 });
    else if (t1.value !== t2.value) {
      diffList.push({ type: "修改", origin: t1, now: t2 });
      diffs(t1.left, t2.left);
      diffs(t1.right, t2.right);
    } else {
      diffs(t1.left, t2.left);
      diffs(t1.right, t2.right);
    }
  }
  diffs(tree1, tree2);
  return diffList;
}


console.log(diff(a, a2));