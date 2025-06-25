/*
 Comprehensive Trie implementation and related algorithms:

 - Implement a Trie
 - Auto Completion/Auto Suggestion Using Trie
 - Prefix Search Using Trie
 - Search a Word in the Trie
 - Insert New Word to Trie
 - Find Longest Prefix Using Trie
 - Trie Serialization and Deserialization
 - Find the Longest Non-Repeating Substring
*/

// Trie node definition
class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

// Trie implementation
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the Trie
  insert(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children.has(ch)) {
        node.children.set(ch, new TrieNode());
      }
      node = node.children.get(ch);
    }
    node.isEndOfWord = true;
  }

  // Search a full word in the Trie
  search(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children.has(ch)) return false;
      node = node.children.get(ch);
    }
    return node.isEndOfWord;
  }

  // Check if a prefix exists in the Trie
  startsWith(prefix) {
    let node = this.root;
    for (const ch of prefix) {
      if (!node.children.has(ch)) return false;
      node = node.children.get(ch);
    }
    return true;
  }

  // Helper: collect words from a given node
  _collect(node, prefix, results) {
    if (node.isEndOfWord) results.push(prefix);
    for (const [ch, nextNode] of node.children) {
      this._collect(nextNode, prefix + ch, results);
    }
  }

  // Auto-completion / suggestion for a prefix
  autocomplete(prefix) {
    let node = this.root;
    for (const ch of prefix) {
      if (!node.children.has(ch)) return [];
      node = node.children.get(ch);
    }
    const results = [];
    this._collect(node, prefix, results);
    return results;
  }

  // Find the longest common prefix among inserted words
  findLongestPrefix() {
    let prefix = '';
    let node = this.root;
    while (node && !node.isEndOfWord && node.children.size === 1) {
      const [[ch, nextNode]] = node.children;
      prefix += ch;
      node = nextNode;
    }
    return prefix;
  }

  // Serialize the Trie to a string
  serialize() {
    const output = [];
    function dfs(node, path) {
      if (node.isEndOfWord) output.push(path);
      for (const [ch, nextNode] of node.children) {
        dfs(nextNode, path + ch);
      }
    }
    dfs(this.root, '');
    return JSON.stringify(output);
  }

  // Deserialize from string and rebuild Trie
  deserialize(data) {
    const words = JSON.parse(data);
    this.root = new TrieNode();
    for (const word of words) {
      this.insert(word);
    }
  }
}

// Longest Non-Repeating Substring (Sliding Window)
function longestNonRepeatingSubstring(s) {
  let start = 0;
  let maxLen = 0;
  const seen = new Map();

  for (let end = 0; end < s.length; end++) {
    const ch = s[end];
    if (seen.has(ch) && seen.get(ch) >= start) {
      start = seen.get(ch) + 1;
    }
    seen.set(ch, end);
    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
}

// Example usage:
const trie = new Trie();
['caat', 'caap', 'caamp', 'caamel',"caa"].forEach(word => trie.insert(word));
console.log(trie.search('camp'));       // true
console.log(trie.startsWith('ca'));     // true
console.log(trie.autocomplete('ca'));   // ['cat','cap','camp','camel']
console.log(trie.findLongestPrefix());   // 'ca'
const serialized = trie.serialize();
console.log(serialized);                // JSON array of words
const newTrie = new Trie();
newTrie.deserialize(serialized);
console.log(newTrie.search('caamel'));    // true

console.log(longestNonRepeatingSubstring('abcabcbb')); // 3
