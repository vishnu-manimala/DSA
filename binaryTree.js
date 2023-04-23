class Tree{
    constructor(){
        this.root = null;
        this.numNodes = 0;
    }
    search(value,temp){
        if(!temp){
            return false;
        }else{
            if(temp.value === value){
                console.log("true")
            }else if(value < temp.value){
                this.search(value, temp.left);
            }
            else {
               this.search(value, temp.right);
            }
        }
    }
}

class Node{
    constructor(value){
        this.value = value;
        this.left  = null;
        this.right = null;
    }
}

function insert(value, tree){
    const node =  new Node(value);
    if(!tree.root){
        tree.root = node;
        
    } else {
        insertNode(tree.root, node)
    }
    tree.numNodes++;
}
function insertNode(root,node){
    if(node.value < root.value){
        if(!root.left){
            root.left = node;
        }else{
            insertNode(root.left, node)
        }
       
    } else {
        if(!root.right){
            root.right = node;
        }else {
            insertNode(root.right,node)
        }
       
    }
}

const tree = new Tree();

insert(10,tree);
insert(5,tree);
insert(15,tree);

let ret = tree.search(5,tree.root)
