class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

var head = new Node(1);
function add(val) {
  var temp = head;
  var node = new Node(val);

  while (temp.next != null) {
    temp = temp.next;
  }
  temp.next = node;
}

add(2);
add(3);
add(4);
add(5);
add(6);
add(7);
add(8);
add(9);

var even = new Node(null);
var h1 = even;
var odd = new Node(null);
var h2 = odd;

var temp = head;
while (temp != null) {
  if (temp.data % 2 == 0) {
    if (even == null) {
      h1 = new Node(temp.data);
    }
    even.next = new Node(temp.data);
    even = even.next;
  } else {
    if (odd == null) {
      h2 = new Node(temp.data);
    }
    odd.next = new Node(temp.data);
    odd = odd.next;
  }
  temp = temp.next;
}

even.next = h2.next;
var out = h1.next;
while (out != null) {
  console.log(out.data);
  out = out.next;
}
