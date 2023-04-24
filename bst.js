class BSTNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    isEmpty(){
        return this.root === null;
    }

    //without reccursion
    insertNewNode(value){
        const newNode = new BSTNode(value)
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            let currentNode = this.root;
            while(true){
                if(value < this.root.value){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
            
        }
    }

    insert(value){
        const newNode = new BSTNode(value);
        if(this.isEmpty()){
            this.root = newNode;
        }else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode){
        
        if(newNode.value<root.value){
            if(root.left === null){
                root.left = newNode;
            }else {
                this.insertNode(root.left, newNode)
            }
        }else {
            if(root.right === null){
                root.right = newNode;
            }else {
                this.insertNode(root.right, newNode)
            }
        }
       
    }
    // delete(value){
    //     this.root = this.deleteNode(this.root, value)
    // }
    // deleteNode(root,value){
    //     if(!root){
    //         return root;
    //     }
    //     if(value < root.value){
    //         this.root = this.deleteNode(root.left, value)
    //     }else if(value> root.value){
    //         this.root = this.deleteNode(root.right,value)
    //     }else {
    //         if(!root.left && !root.right){
    //             return null;
    //         }
    //         if(!root.left){
    //             return root.right
    //         }
    //         if(!root.right){
    //             return root.left;
    //         }
    //         root.value = this.min(root.right);
    //         root.right = this.deleteNode(root.right, root.value)
    //     }
    // }

    delete(value){
            this.root = this.deleteNode(this.root, value)
        }
    deleteNode(currentNode, value){
        console.log(currentNode)
        if(!currentNode ){
            return null;
        } else if(value < currentNode.value){
            currentNode.left = this.deleteNode(currentNode.left,value)
        } else if(value > currentNode.value){
            currentNode.right = this.deleteNode(currentNode.right, value)
        } else{
            if(!currentNode.left && !currentNode.right){
                return null;
            } else if(!currentNode.left){
                currentNode = currentNode.right;
            } else if(!currentNode.right){
                currentNode = currentNode.left
            } else {
                let subTreeMinvalue = this.minValue(currentNode.right)
                currentNode.value = subTreeMinvalue;
                currentNode.right = this.deleteNode(currentNode.right.subTreeMinvalue)
            }
        }
        return currentNode;
    }

    minValue(current){
        while(current.left){
            current = current.left.value;
        }
    }
    search(root,value){
        
        if(!root){
            return false
        } else {
            if(root.value === value){
                return true;
            }else if(value < root.value){
            return this.search(root.left, value);
            }else {
            return this.search(root.right, value)
            } 
        }
    }
    print(){
        console.log(tree)
    }
    preorder(root){
        if(root){
            console.log(root.value);
            this.preorder(root.left);
            this.preorder(root.right);
        }
      
    }

    inorder(root){
        if(root){
            this.inorder(root.left);
            console.log(root.value)
            this.inorder(root.right);
       
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    levelOrder(){
        let queue = [];
        queue.push(this.root);
        while(queue.length){
            let current = queue.shift();
            console.log(current.value);
            if(current.left){
                queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right);
            }
        }

    }

    closestValue( target,root=this.root) {
        let closest = root.value;
        
        while (root !== null) {
          if (Math.abs(root.value - target) < Math.abs(closest - target)) {
            closest = root.value;
          }
          if (target < root.value) {
            root = root.left;
          } else if (target > root.value) {
            root = root.right;
          } else {
            return root.value;
          }
        }
       console.log(closest);
      }
}



 
  



const tree = new BinarySearchTree();
console.log(tree.isEmpty());

tree.insert(10);
tree.insert(23);
tree.insert(5);
tree.insert(4);
tree.insert(8);
tree.insert(20);
tree.insert(26);

// tree.preorder(tree.root);
// console.log("DFS")
// tree.postOrder(tree.root)
// console.log(" ")
// console.log("BFS")
// tree.levelOrder();
//tree.closestValue(15);

tree.delete(10);
console.log(tree)