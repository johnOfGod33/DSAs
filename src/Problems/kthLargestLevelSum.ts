// https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/?envType=daily-question&envId=2024-10-22

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
  if (root === null) {
    return -1;
  }

  let levelSums: number[] = [];
  let queue: TreeNode[] = [root];

  while (queue.length) {
    let levelLength = queue.length;
    let sums = 0;

    for (let i = 0; i < levelLength; ++i) {
      let currNode = queue.shift();

      if (currNode) {
        sums += currNode.val;

        if (currNode.left !== null) {
          queue.push(currNode.left);
        }

        if (currNode.right !== null) {
          queue.push(currNode.right);
        }
      }
    }

    levelSums.push(sums);
  }

  if (k > levelSums.length) {
    return -1;
  }

  levelSums.sort((a, b) => b - a);

  return levelSums[k - 1];
}

let root = new TreeNode(
  5,
  new TreeNode(
    8,
    new TreeNode(2, new TreeNode(4), new TreeNode(6)),
    new TreeNode(1)
  ),
  new TreeNode(9, new TreeNode(3), new TreeNode(7))
);

console.log(kthLargestLevelSum(root, 2));
