// https://leetcode.com/problems/cousins-in-binary-tree-ii/?envType=daily-question&envId=2024-10-23

import { TreeNode } from "./kthLargestLevelSum";
function replaceValueInTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }

  let queue: TreeNode[] = [root];
  let levelSums: number[] = [];

  while (queue.length) {
    let sums = 0;
    let levelLength = queue.length;

    for (let i = 0; i < levelLength; i++) {
      let currNode = queue.shift();

      if (currNode) {
        sums += currNode.val;

        if (currNode.left) queue.push(currNode.left);

        if (currNode.right) queue.push(currNode.right);
      }
    }

    levelSums.push(sums);
  }

  queue = [root];
  let depth = 1;

  while (queue.length) {
    let currLen = queue.length;

    for (let i = 0; i < currLen; i++) {
      let currNode = queue.shift();
      let siblingSum = 0;

      if (currNode) {
        if (currNode.left) {
          siblingSum += currNode.left.val;
        }

        if (currNode.right) {
          siblingSum += currNode.right.val;
        }

        if (currNode.left) {
          currNode.left.val = levelSums[depth] - siblingSum;
          queue.push(currNode.left);
        }

        if (currNode.right) {
          currNode.right.val = levelSums[depth] - siblingSum;
          queue.push(currNode.right);
        }
      }
    }
    ++depth;
  }

  root.val = 0;

  return root;
}

let newRoot = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(1), new TreeNode(10)),
  new TreeNode(9, null, new TreeNode(7))
);

console.log(replaceValueInTree(newRoot));
