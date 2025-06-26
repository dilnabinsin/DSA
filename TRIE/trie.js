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


  // Auto-completion / suggestion for a prefix
  autoComplete(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children.has(char)) {
                return `${prefix} : no suggestions found`;
            }
            node = node.children.get(char);
        }
        return this.printWordWithPrefix(node, prefix);
    }
printWordWithPrefix(node, prefix) {
        let words = [];
        const traverse = (node, currentPrefix) => {
            if (node.isEndOfWord) {
                words.push(currentPrefix);
            }
            for (let [char, child] of node.children.entries()) {
                traverse(child, currentPrefix + char);
            }
        };
        traverse(node, prefix);
        return words.length > 0 ? words : `${prefix} : no suggestions found`;
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

 suggest(prefix, max) {
        let suggestions = this.autoComplete(prefix);
        if (Array.isArray(suggestions)) {
            let maxSuggest = suggestions.slice(0, max);
            return maxSuggest.join(", ");
        } else {
            return suggestions;
        }
    }

     printWords(){
        let words = []
        const traverse = (node , prefix)=>{
            if(node.isEndOfWord){
                words.push(prefix)
            }
            for (let [char, childNode] of node.children.entries()) {
            traverse(childNode, prefix + char);
        }
        }
        traverse(this.root , "")
        return words
    }
    findNode(prefix) {
  let node = this.root;
  for (let char of prefix) {
    if (!node.children.has(char)) return null;
    node = node.children.get(char);
  }
  return node;
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
['cat', 'cap', 'camp', 'camel',"ca","capp","cappp"].forEach(word => trie.insert(word));
console.log(trie.search('camp'));       // true
console.log(trie.startsWith('ca'));     // true
console.log(trie.printWords()); 
console.log(trie.autoComplete("ca")); // ['caat', 'caap', 'caamp', 'caamel', 'caa']
console.log(trie.autoComplete("cab")); // 'cab : no   // ['cat','cap','camp','camel']
console.log(trie.findLongestPrefix()); 
console.log(trie.findNode("ca"));
const serialized = trie.serialize();
console.log(serialized);                // JSON array of words
const newTrie = new Trie();
newTrie.deserialize(serialized);
console.log(newTrie.search('camel'));    // true
console.log(trie.suggest("cap" , 2));
console.log(longestNonRepeatingSubstring('abcabcbb')); // 3
