class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

var head1 = new Node(1);
var head2 = new Node(6);
function add(val, head) {
  var node = new Node(val);
  var temp = head;
  while (temp.next != null) {
    temp = temp.next;
  }
  temp.next = node;
}

add(2, head1);
add(8, head1);
add(10, head1);
add(15, head1);

add(7, head2);
add(11, head2);
add(13, head2);
add(20, head2);

console.log("First LL");
var temp = head1;
while (temp != null) {
  console.log(temp.data);
  temp = temp.next;
}

console.log("Second LL");
var temp = head2;
while (temp != null) {
  console.log(temp.data);
  temp = temp.next;
}

var temp1 = head1;
var temp2 = head2;
var dummyNode = new Node(null);
var out = dummyNode;
while (temp1 != null || temp2 != null) {
  if (temp1 == null) {
    out.next = temp2;
    break;
  }

  if (temp2 == null) {
    out.next = temp1;
    break;
  }

  if (temp1.data > temp2.data) {
    temp3 = new Node(temp2.data);
    temp2 = temp2.next;
    out.next = temp3;
  } else {
    temp3 = new Node(temp1.data);
    temp1 = temp1.next;
    out.next = temp3;
  }
  out = out.next;
}

console.log("Output LL");
var temp = dummyNode.next;
while (temp != null) {
  console.log(temp.data);
  temp = temp.next;
}
