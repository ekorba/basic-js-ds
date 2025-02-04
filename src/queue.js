const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
tail=null;
head=null;
  getUnderlyingList() {
   return this.head
  }

  enqueue( value ) {
    const object=new ListNode( value );
    if (this.tail) {
      
      this.tail.next=object
      this.tail=object
    } else if (!this.tail && !this.head){
      this.head=object;
      this.tail=object
    }
  }

  dequeue() {
   const res=this.head;
   this.head=this.head.next
   return res.value
  }
}

module.exports = {
  Queue
};
