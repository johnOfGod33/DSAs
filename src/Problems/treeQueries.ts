// https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/submissions/

import { TreeNode } from "./kthLargestLevelSum";

function treeQueries(root: TreeNode | null, queries: number[]): number[] {
  const ans: number[] = [];
  let currMaxHeight = 0;

  const traverseTree = (
    node: TreeNode | null,
    height: number,
    leftToRight: boolean
  ) => {
    if (!node) return;

    ans[node.val] = Math.max(ans[node.val] ?? 0, currMaxHeight);
    currMaxHeight = Math.max(currMaxHeight, height);

    if (leftToRight) {
      traverseTree(node.left, height + 1, leftToRight);
      traverseTree(node.right, height + 1, leftToRight);
    } else {
      traverseTree(node.right, height + 1, leftToRight);
      traverseTree(node.left, height + 1, leftToRight);
    }
  };

  traverseTree(root, 0, true);
  currMaxHeight = 0;
  traverseTree(root, 0, false);

  return queries.map((query) => ans[query]);
}

console.log(
  treeQueries(
    new TreeNode(
      1,
      new TreeNode(3, new TreeNode(2)),
      new TreeNode(4, new TreeNode(6), new TreeNode(5, null, new TreeNode(7)))
    ),
    [4]
  )
);
