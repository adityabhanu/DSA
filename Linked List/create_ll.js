class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

var head = new Node(10);

//insert node at end - [20, 30]
function add(val) {
  var newNode = new Node(val);
  var curr = head;
  while (curr.next != null) {
    curr = curr.next;
  }
  curr.next = newNode;
}

var arr = [20, 30];
for (let i = 0; i < arr.length; i++) {
  add(arr[i]);
}

//insert node at start
function addAtStart(val) {
  var newNode = new Node(val);
  newNode.next = head;
  head = newNode;
}

addAtStart(5);

var temp = head;
while (temp != null) {
  console.log(temp.data);
  temp = temp.next;
}
