class _Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor () {
        this.head = null
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }

    insertBefore(item, key) {
        // check to see if list is empty
        // if empty, insertBefore should exit
        if (this.head === null) {
            return
        }

        // if key is the first item in the list, insert item first
        if (this.head.value === key) {
            this.insertFirst(item)
            return
        }

        // keep track of our previous node and current node
        let previousNode = null
        let currNode = this.head

        //traverse till we find the key
        while (currNode !== null && currNode.value !== key) {
            previousNode = currNode
            currNode = currNode.next
        }

        // key doesn't exist
        if (currNode === null) {
            console.log('Node not found to insert')
            return
        }

        // insert between the previous node and (before) current node
        previousNode.next = new _Node(item, currNode)
    }

    insertAfter(item, key) {
        // check to see if list is empty
        // if empty, insertAfter should exit
        if (this.head === null) {
            return
        }

        // keep track of our previous node and current node
        let previousNode = null
        let currNode = this.head

        //traverse till we find the key
        while (currNode !== null && currNode.value !== key) {
            previousNode = currNode
            currNode = currNode.next
        }

        // key doesn't exist
        if (currNode === null) {
            console.log('Node not found to insert')
            return
        }

        // insert after the current node
        currNode.next = new _Node(item, currNode.next)
    }

    // Option without helper function
    // insertAt(item, i) {
    //     // if empty, insertAt should exit 
    //     if (this.head === null) {
    //         console.log('List is empty')
    //         return
    //     }

    //     // if index is the first in the list
    //     if (i === 0) {
    //         this.insertFirst(item)
    //         return
    //     }

    //     // keep track of current node
    //     let currNode = this.head

    //     if (!currNode) {
    //         console.log('Index out of bounds')
    //         return
    //     }

    //     try to iterate through, if index doesn't exist, return error
    //     try {
    //         for (let j = 0; j < i; j++) {
    //             currNode = currNode.next
    //         }
    //     } catch(e) {
    //         console.log('Index out of bounds', e)
    //         return
    //     }

    //     //create newNode, set newNode next to the currNode.next, and make currNode.next = newNode for splicing
    //     let newNode = new _Node(item, null)
        
    //     newNode.next = currNode.next
    //     currNode.next = newNode
    // }

    insertAt(item, i) {
        // if empty, insertAt should exit 
        if (this.head === null) {
            console.log('List is empty')
            return
        }

        // if index is the first in the list
        if (i === 0) {
            this.insertFirst(item)
            return
        }

        // keep track of current node, iterate through using helper function
        let currNode = this._findnthElement(i - 1)

        // if index doesn't exist, return error
        if (!currNode) {
            console.log('Index out of bounds')
            return
        }

        //create newNode, set newNode next to the currNode.next, and make currNode.next = newNode for splicing
        let newNode = new _Node(item, null)
        
        newNode.next = currNode.next
        currNode.next = newNode
    }

    insertLast(item) {
        // check to see if list is empty
        // if it is, insert the new item as the only item in the list
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            // start at beginning of the list and move through until you reach the end
            let tempNode = this.head
            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            //set the end node's next pointer to the new node
            tempNode.next = new _Node(item, null)
        }
    }

    find(item) {
        // start at the head
        let currNode = this.head
        // if the list is empty
        if (!this.head) {
            return null
        }
        //check for the item
        while (currNode.value !== item) {
            // return null if its the end of the list and the item is not on the list
            if (currNode.next === null) {
                return null
            }
            else {
                // otherwise keep looking
                currNode = currNode.next
            }
        }
        // found it
        return currNode
    }

    _findnthElement(pos) {
        let node = this.head

        try {
        for ( let i = 0; i < pos; i++) {
            node = node.next
        }
        } catch(e) {
            return null
        }
        return node
    }

    remove(item) {
        // if the list is empty
        if (!this.head) {
            return null
        }
        // if the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next
            return
        }
        // start at the head
        let currNode = this.head
        // keep track of previous
        let previousNode = this.head

        while (( currNode !== null) && (currNode.value !== item)) {
            // save the previous node
            previousNode = currNode
            currNode = currNode.next
        }
        if (currNode === null) {
            console.log('Item not found')
            return
        }
        previousNode.next = currNode.next
    }
}

const SLL = new LinkedList()

function main() {
    // const SLL = new LinkedList()
    SLL.insertFirst(4)
    SLL.insertLast(10)
    SLL.insertLast(2)
    SLL.insertLast(17)
    SLL.insertLast(1)
    SLL.insertLast(23)
    SLL.insertLast(50)
    SLL.insertLast(47)
    SLL.insertLast(2)
    SLL.insertLast(18)
}

main()

// const SLL = main(SLL)

function display(list) {
    console.log(JSON.stringify(list, null, 4))
}

// display(SLL)



function size(list) {
    let size = 0
    let currNode = list.head

    while (currNode !== null) {
        currNode = currNode.next
        size++
    }
    console.log(size)
}

// size(SLL)



function isEmpty(list) {
    let currNode = list.head

    if (!currNode) {
        return true
    }

    return false
}

// console.log(isEmpty(SLL))



function findPrevious(list, item) {
    let currNode = list.head

    while (currNode !== null && currNode.next.value !== item) {
        currNode = currNode.next
    }

    return currNode
}

// console.log(findPrevious(SLL, 'Starbuck'))



function findLast(list) {
    let currNode = list.head

    while (currNode !== null && currNode.next !== null) {
        currNode = currNode.next
    }

    return currNode
}

// console.log(findLast(SLL))



function reversedList(list) {
    let reversedHead = null
    let currNode = list.head
    let nextNode
   
    while (currNode !== null) {
        nextNode = currNode.next
        currNode.next = reversedHead
        reversedHead = currNode
        currNode = nextNode
    }

    list.head = reversedHead
    return list
}

// console.log('TEST')
// console.log(reversedList(SLL))

// display(SLL)



function thirdFromTheEnd(list) {
    let currNode = list.head

    while ( currNode.next.next.next !== null) {
        currNode = currNode.next
    }

    return currNode
}

// console.log(thirdFromTheEnd(SLL))



function middleNode(list) {
    let slowNode = list.head
    let fastNode = list.head

    while (fastNode && fastNode.next) {
        slowNode = slowNode.next
        fastNode = fastNode.next.next
    }

    return slowNode   
}

// console.log(middleNode(SLL))



function cycleList(list) {
    let item1 = list.head
    let item2 = list.head

    while (item1 !== item2) {
        item1 = item1.next
        item2 = item2.next.next
    }
    if (item1 === item2) {
        return true
    }
    return false
}

// console.log(cycleList(SLL))



// mergeSort a Linked List

function mergeSortLinkedList(list) {
    let currNode = list.head;

    if (currNode.next === null) {
        return list;
    }

    let length = 1;

    while (currNode.next !== null) {
        length++;
        currNode = currNode.next;
    }

    const middle = Math.floor(length / 2);
    let left = splitLinkedList(list, 0, middle);
    let right = splitLinkedList(list, middle, length);

    left = mergeSortLinkedList(left);
    right = mergeSortLinkedList(right);

    return mergeLinkedLists(left, right);
}



function splitLinkedList(list, start, end) {
    let currNode = list.head;

    if (currNode === null) return;

    const splitList = new LinkedList();

    let i = 0;

    while (currNode !== null) {
        if (i >= start && i < end) {
            splitList.insertLast(currNode.value);
        }
        i++;
        currNode = currNode.next;
    }
    return splitList;
}



function mergeLinkedLists(left, right) {
    const mergedList = new LinkedList();

    let leftList = left.head;
    let rightList = right.head;

    while (leftList && rightList) {
        if (leftList.value <= rightList.value) {
            mergedList.insertLast(leftList.value);
            leftList = leftList.next;
        } else {
            mergedList.insertLast(rightList.value);
            rightList = rightList.next;
        }
    }
    while (leftList) {
        mergedList.insertLast(leftList.value);
        leftList = leftList.next;
    }
    while (rightList) {
        mergedList.insertLast(rightList.value);
        rightList = rightList.next;
    }
    return mergedList;
}


display(mergeSortLinkedList(SLL))