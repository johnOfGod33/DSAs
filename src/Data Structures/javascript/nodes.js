/**
 * Node is basis of many data structure like linked list, trees, queues
 * Node contain a value and a link to another node sometimes referred as pointer
 * if Node has no link or point to null so we've reached the end of path
 */

class Node {
  constructor(value = null, link_node = null) {
    this.value = value;
    this.link_node = link_node;
  }

  setLinkNode(link_node) {
    this.link_node = link_node;
  }

  getValue() {
    return this.value;
  }

  getLinkNode() {
    return this.link_node;
  }
}

let one = new Node(1);
let two = new Node(2);

one.setLinkNode(two);

console.log(one);
