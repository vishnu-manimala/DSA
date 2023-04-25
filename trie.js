class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
    
    insert(word) {
      let node = this.root;
      
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      
      node.isEndOfWord = true;
    }
    
    search(word) {
      let node = this.root;
      
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      
      return node.isEndOfWord;
    }
    
    startsWith(prefix) {
      let node = this.root;
      
      for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      
      return true;
    }
  }

  const trie = new Trie();

trie.insert("hello");
trie.insert("world");

console.log(trie.search("hello")); // true
console.log(trie.search("world")); // true
console.log(trie.search("hi")); // false

console.log(trie.startsWith("he")); // true
console.log(trie.startsWith("wor")); // true
console.log(trie.startsWith("hi")); // false
