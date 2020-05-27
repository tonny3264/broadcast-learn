// 前+中→二叉树
let prev = ["A", "C", "F", "G", "B", "D", "E"];
let mid = ["F", "C", "G", "A", "D", "B", "E"];

function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

function tree(p, m){
    if(p == null || m == null || p.length == 0 || m.length == 0 || p.length != m.length) return null;
    const node = new Node(p[0]);
    let index = m.indexOf(p[0]);
    if(index < 0){
        throw new Error("给定的已知数据出错!");
    }
    const pLeftTree = p.slice(1, index + 1);
    const pRightTree = p.slice(index + 1);
    const mLeftTree = m.slice(0, index);
    const mRightTree = m.slice(index + 1);
    node.left = tree(pLeftTree, mLeftTree);
    node.right = tree(pRightTree, mRightTree);
    return node;
}

console.log(tree(prev, mid));

// 中+后→二叉树
const m = ["F", "C", "G", "A", "D", "B", "E"];
const n = ["F", "G", "C", "D", "E", "B", "A"];

function tree2(mid, next){
    if(mid == null || next == null || mid.length == 0 || next.length == 0 || mid.length != next.length) return null;
    const rootVal = next[next.length - 1];
    const root = new Node(rootVal);
    const index = mid.indexOf(rootVal);
    const mLeftTree = mid.slice(0, index);
    const mRightTree = mid.slice(index + 1);
    const nLeftTree = next.slice(0, index);
    const nRightTree = next.slice(index, next.length -1);
    root.left = tree2(mLeftTree, nLeftTree);
    root.right = tree2(mRightTree, nRightTree);
    return root;
}

console.log(tree2(m, n));