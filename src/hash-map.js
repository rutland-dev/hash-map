import LinkedList from "./linked-list";

export default class HashMap {
    constructor() {
        this.filled = 0;
        this.capacity = 16;
        this.loadFactor = 0.75
        this.buckets = new Array(this.capacity).fill(null);
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i += 1) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        hashCode %= this.capacity;

        return hashCode;
    }

    set(key, value) {
        const index = this.hash(key);

        let listIndex;

        if (this.filled / this.capacity >= this.loadFactor) this.resize();

        if (this.buckets[index] == null) {
            this.buckets[index] = new LinkedList;
            listIndex = this.buckets[index];
        } else {
            listIndex = this.buckets[index].listHead;
            while (listIndex != null) {
                if (listIndex.key === key) {
                    listIndex.value = value;
                    return
                }
                listIndex = listIndex.nextNode;
            }
        }
        this.buckets[index].append(key, value);
        this.filled += 1;
    }

    get(key) {
        const index = this.hash(key);
        let listIndex = this.buckets[index];
        const msg = `${key} is at index ${index}.`

        if (listIndex == null) return null;

        if (listIndex.listHead.key === key) return msg;

        listIndex = listIndex.listHead.nextNode;

        while (listIndex != null) {
            if (listIndex.key === key) return msg;
            listIndex = listIndex.nextNode;
        }

        return null;
    }

    has(key) {
        if (this.get(key) == null) return false;
        return true;
    }

    remove(key) {
        const index = this.hash(key);
        let listIndex = this.buckets[index];

        if (listIndex == null) return false;

        if (listIndex.listHead.key === key) {
            listIndex.removeAt(0);
            return true;
        }

        listIndex = listIndex.listHead.nextNode;
        let counter = 0

        while (listIndex != null) {
            counter += 1;
            if (listIndex.key === key) {
                this.buckets[index].removeAt(counter);
            }
            listIndex = listIndex.nextNode;
        }

        return false;
    }

    length() {
        return this.filled;
    }

    clear() {
        this.buckets = new Array(this.capacity).fill(null);
    }

    keys() {
        const keyArray = [];
        let counter = 0;
        let index = this.buckets[0];

        while (counter < this.capacity) {
            if(index != null) {
                index = index.listHead;
                while (index != null) {
                    keyArray.push(index.key);
                    index = index.nextNode;
                }
            }
            counter += 1;
            index = this.buckets[counter];
        }
        return keyArray;
    }

    values() {
        const valueArray = [];
        let counter = 0;
        let index = this.buckets[0];

        while (counter < this.capacity) {
            if(index != null) {
                index = index.listHead;
                while (index != null) {
                    valueArray.push(index.value);
                    index = index.nextNode;
                }
            }
            counter += 1;
            index = this.buckets[counter];
        }
        return valueArray;
    }

    entries() {
        const entriesArray = [];
        let counter = 0;
        let index = this.buckets[0];

        while (counter < this.capacity) {
            if(index != null) {
                index = index.listHead;
                while (index != null) {
                    const tmpArray = [];
                    tmpArray.push(index.key, index.value);
                    entriesArray.push(tmpArray);
                    index = index.nextNode;
                }
            }
            counter += 1;
            index = this.buckets[counter];
        }
        return entriesArray;
    }

    resize() {
        console.log("resizing");
        this.filled = 0;
        const tmpArray = this.entries();
        this.clear();
        this.capacity *= 2;
        tmpArray.forEach(entry => {
            this.set(entry[0], entry[1]);
        });
    }

    printList() {
        console.log(this.buckets);
    }
}