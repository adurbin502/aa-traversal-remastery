class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function breadthFirstSearch(root, target) {
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.value === target) {
      return true;
    }
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return false;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(
  "Searching for value 5:",
  breadthFirstSearch(root, 5)
);
console.log(
  "Searching for value 6:",
  breadthFirstSearch(root, 6)
);
