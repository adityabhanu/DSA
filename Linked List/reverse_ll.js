class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

var head = new Node(1);

function add(val) {
  var node = new Node(val);
  var temp = head;
  while (temp.next != null) {
    temp = temp.next;
  }
  temp.next = node;
}

add(2);
add(3);
add(4);
add(5);

//Reverse Linked List

function reverse() {
  var prev = null;
  var curr = head;
  var next = null;

  while (curr != null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  head = prev;
}

reverse();

var out = head;
while (out != null) {
  console.log(out.data);
  out = out.next;
}
