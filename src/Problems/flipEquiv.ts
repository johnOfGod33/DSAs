// https://leetcode.com/problems/flip-equivalent-binary-trees/?envType=daily-question&envId=2024-10-24

import { TreeNode } from "./kthLargestLevelSum";

function flipEquiv(root1: TreeNode | null, root2: TreeNode | null): boolean {
  if (root1 === null && root2 === null) return true;
  if (root1 === null || root2 === null) return false;
  if (root1.val !== root2.val) return false;

  return (
    (flipEquiv(root1.left, root2.left) &&
      flipEquiv(root1.right, root2.right)) ||
    (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left))
  );
}

let root1 = new TreeNode(
  1,
  new TreeNode(
    2,
    new TreeNode(4),
    new TreeNode(5, new TreeNode(7), new TreeNode(8))
  ),
  new TreeNode(3, new TreeNode(6))
);
let root2 = new TreeNode(
  1,
  new TreeNode(3, null, new TreeNode(6)),
  new TreeNode(
    2,
    new TreeNode(4),
    new TreeNode(5, new TreeNode(8), new TreeNode(7))
  )
);

console.log(flipEquiv(root1, root2));
