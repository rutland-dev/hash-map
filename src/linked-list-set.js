import Node from "./node-set";

export default class LinkedList {
    constructor() {
        this.listHead = null
    }

    prepend(key, value) {
        let tmp = null;
        if (this.listHead != null) {
            tmp = this.listHead;
            this.listHead = new Node(key, value);
            this.listHead.nextNode = tmp;
        } else {
            this.listHead = new Node(key, value);
        }
    };

    append(key, value) {
        let tmp = this.listHead;
        if (tmp == null) {
            this.prepend(key, value);
        } else {
            while (tmp.nextNode != null) {
                tmp = tmp.nextNode;
            }

            tmp.nextNode = new Node(key, value);
        }
    };

    size() {
        let length = 0;
        let tmp = this.listHead;

        while (tmp != null) {
            length += 1;
            tmp = tmp.nextNode;
        }

        return length;
    };

    head() {
        return this.listHead.value;
    };

    tail() {
        let tmp = this.listHead;

        while (tmp.nextNode != null) {
            tmp = tmp.nextNode;
        }

        return tmp.value;
    }

    at(index) {
        let counter = 0;
        let tmp = this.listHead;

        while (counter !== index) {
            counter += 1;
            tmp = tmp.nextNode;
        }

        return tmp.value;
    }

    pop() {
        let tmp = this.listHead;

        while (tmp.nextNode.nextNode != null) {
            tmp = tmp.nextNode;
        }

        tmp.nextNode = null;
    }

    contains(value) {
        let tmp = this.listHead;

        while (tmp != null) {
            if (tmp.value === value) {
                return true;
            }
                tmp = tmp.nextNode;
        }
        
        return false;
    }

    find(value) {
        let counter = 0;
        let tmp = this.listHead;
        
        if (tmp.value === value) return counter;

        while (tmp.value !== value && tmp.nextNode != null) {
            tmp = tmp.nextNode;
            counter += 1;
            if (tmp.value === value) return counter;
        }

        return "Value not found.";
    }

    insertAt(value, index) {
        let counter = 0;

        if (index === 0 || this.head == null) {
            this.prepend(value);
            return;
        }

        let current = this.listHead;
        let previous = null;

        while (counter < index) {
            previous = current;
            current = current.nextNode;
            if (current == null) break;
            counter += 1;
        }

        const tmp = new Node(value);
        tmp.nextNode = current;
        previous.nextNode = tmp;
    }

    removeAt(index) {
        let counter = 0;
        
        if (index === 0) {
            this.listHead = this.listHead.nextNode;
            return;
        }

        let current = this.listHead;
        let previous = null;

        while (counter < index) {
            previous = current;
            current = current.nextNode;
            counter += 1;
            if (current == null) {
                console.error(`Index: (${index}) not found.`);
                return;
            };
        }

        previous.nextNode = current.nextNode;
    }

    toString() {
        let tmp = this.listHead;
        let string = `( ${tmp.value} )`;
        tmp = tmp.nextNode;

        while (tmp != null) {
            string = string.concat(` -> ( ${tmp.value} )`);
            tmp = tmp.nextNode;
        }

        return string;
    };
};