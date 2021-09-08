class TreeNode {
  constructor(){
    this.left = null;
    this.right = null;
  }

  setValue(value){
    this.value = value;
  }

  getValue(){
    return this.value;
  }
}

const insertNo = (root, value) => {
  if (!root.hasOwnProperty('value')) { //the first node had a value?
    return root.setValue(value);
  }
  else{
    while (true) { //infinite lopp
      if (value <= root.value) {
        if(!root.left){
          root.left = new TreeNode();
          return root.left.setValue(value);
        }
        else{
          root = root.left;
        }
      }
      else{
        if(!root.right){
          root.right = new TreeNode();
          return root.right.setValue(value);
        }
        else{
          root = root.right;
        }
      }
    }
  }
}

const inOrder = (root) => { 
  if(root){
    inOrder(root.left);
    console.log(root.getValue());
    inOrder(root.right);
  }
}

const postOrder = (root) => { 
  if(root){
    inOrder(root.left);
    inOrder(root.right);
    console.log(root.getValue());
    // console.log(root.left)
  }
}

const preOrder = (root) => { 
  if(root){
    console.log(root.getValue());
    inOrder(root.left);
    inOrder(root.right);
  }
}

const root = new TreeNode();

insertNo(root, 5);
insertNo(root, 4);
insertNo(root, 6);
insertNo(root, 9);

inOrder(root);
preOrder(root);
postOrder(root);