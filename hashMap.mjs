import { murmurhash3_32_gc as murmur3 } from "./murmurhash3.mjs";

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }

    append(value) {
      const newNode = new Node(value);
      
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        return this;
      }
      
      this.tail.next = newNode;
      this.tail = newNode;
      return this;
    }
}

class HashMap {
  constructor() {
    this.buckets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
  }

  // this function will return the bucket that the key belongs to
  bucket(key) {
    let h = this.murmur3(key);
    return this.buckets[h % this.buckets.length];
  }

  // this function will return the entry in the bucket that has the key
  entry(bucket, key) {
    for (let e of bucket) {
      if (e.key === key) {
        return e;
      }
    }
    return null
  }

  // this function will set the value of the key in the bucket
  set(key, value) {
    let b = this.bucket(key);
    let e = this.entry(b, key);
    if (e) {
      e.value = value;
      return;
    }
    b.push({ key, value });
  }

  // this function will get the value of the key in the bucket
  get(key) {
    let b = this.bucket(key);
    let e = this.entry(b, key);
    if (e) {
      return e.value;
    }
    return null;
  }

  has(key) {
    let b = this.bucket(key);
    let e = this.entry(b, key);
    if (e) {
      return true;
    }
    return false;
  }

  remove(key) {
    let b = this.bucket(key);
    let e = this.entry(b, key);

    if(this.has(key)) {
      this.bucket(key).splice(this.bucket(key).indexOf(e), 1); // remove the element from the bucket
      return true;
    }
    return false;
  }

  length() {
    let count = 0;
    for (let bucket of this.buckets) {
      for (let entry of bucket) {
        count++;
      }
    }
    return count;
  }

  // clear all buckets
  clear() {
    this.buckets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    }

  // this function will return the keys in the bucket
  keys() {
    const array = [];
    for (let bucket of this.buckets) {
      for (let key in bucket) {
        if(key) array.push(key);
      }
    }
    return array
  }

  values() {
    const array = [];
    for (let bucket of this.buckets) {
      for (let entry in bucket) {
        if(entry.value) array.push(entry.value);
      }
    }
    return array
  }

  printThis() {
    console.log(this.buckets)
  }
  
}

export {HashMap}