function Node(val){
    this.value = val;
    this.next = null;
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

function each(node){
    if(node == null) return;
    console.log(node.value);
    each(node.next);
}

// each(n1);

function nizhi(root){
    if(root.next.next == null){
        root.next.next = root;
        return root.next;
    }else{
        let result = nizhi(root.next);
        // console.log(root.value, root.next);
        root.next.next = root;
        root.next = null;
        return result;
    }
}
nizhi(n3);