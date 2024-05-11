class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function depthFirstSearch(node, target) {
  if (node === null) return false;

  if (node.value === target) return true;

  const foundInLeft = depthFirstSearch(node.left, target);
  if (foundInLeft) return true;

  const foundInRight = depthFirstSearch(node.right, target);
  if (foundInRight) return true;

  return false;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(
  "Searching for value 5:",
  depthFirstSearch(root, 5)
);
console.log(
  "Searching for value 6:",
  depthFirstSearch(root, 6)
);
