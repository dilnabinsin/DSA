class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}

class Tree{
    constructor(){
        this.root=null
    }
    
    insert(data){
        const newNode=new Node(data)
        if(!this.root){
           this.root=newNode
           return
        }
        
        let current=this.root
        while(true){
            if(data<current.data){
                if(!current.left){
                    current.left=newNode
                    break
                }
                current=current.left
            }else{
                if(!current.right){
                    current.right=newNode
                    break
                }
                current=current.right
            }
        }
    }
    
        inorder(node=this.root){
            if(!node){
                return null
            }
            
             this.inorder(node.left)
            console.log(node.data)
             this.inorder(node.right)
        }
 
}

function printLeafNodes(node) {
  if (!node) return;
  
  if (!node.left && !node.right) {
    console.log(node.data);
    return;
  }

  printLeafNodes(node.left);
  printLeafNodes(node.right);
}
const bst = new Tree();
[5, 3, 7, 6, 9, 12].forEach(v => bst.insert(v));
bst.inorder(); // Prints sorted list with duplicates

console.log("..........")
printLeafNodes(bst.root);  // Prints only leaf values