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

//insert node at mid
function insertAtMid(val) {
  var midNode = new Node(val);
  var temp = head;
  var count = 0;

  while (temp != null) {
    temp = temp.next;
    count++;
  }
  var mid = Math.floor(count / 2);

  var tmp = head;
  while (tmp != null) {
    tmp = tmp.next;
    mid--;
    if (mid == 1) {
      break;
    }
  }

  nextNode = tmp.next;
  tmp.next = midNode;
  midNode.next = nextNode;
}

insertAtMid(15);

var temp = head;
while (temp != null) {
  console.log(temp.data);
  temp = temp.next;
}
