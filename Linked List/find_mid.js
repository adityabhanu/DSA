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

var out = head;
while (out != null) {
  console.log(out.data);
  out = out.next;
}

//Hare and Tortoise approach
// By the time fast poiner reaches end, slow will be at middle

function findMid() {
  var slow = head;
  var fast = head;

  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  console.log(slow);
}

findMid();
