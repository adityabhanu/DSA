//Find intersection point of two Sorted Linked List
//After intersection point all the elements will be same

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

var head1 = new Node(1);
var head2 = new Node(0);
function add(val, head) {
  var node = new Node(val);
  var temp = head;
  while (temp.next != null) {
    temp = temp.next;
  }
  temp.next = node;
}

add(4, head1);
add(6, head1);
add(8, head1);
add(9, head1);

add(2, head2);
add(3, head2);
add(6, head2);
add(8, head2);
add(9, head2);

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

//Find Intersection point

var temp1 = head1;
var temp2 = head2;

while (temp1 != null || temp2 != null) {
  if (temp1.data == temp2.data) {
    console.log(temp1);
    console.log(temp2);
    break;
  } else if (temp1.data < temp2.data) {
    temp1 = temp1.next;
  } else {
    temp2 = temp2.next;
  }
}
