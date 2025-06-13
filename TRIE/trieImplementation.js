class Trie {
    constructor() {
        this.root = {};
    }

    insert(word) {
        let node = this.root;

        for (let char of word) {
            if (!node[char]) {
                node[char] = {};
            }
            node = node[char];
        }
        node.isEnd = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node[char]) {
                return false;
            }
            node = node[char];
        }
        return node.isEnd === true;
    }
//------------------------------------------
//prefix search
    startsWith(word) {
        let node = this.root;
        for (let char of word) {
            if (!node[char]) {
                return false;
            }
            node = node[char];
        }
        return true;
    }
//-------------------------------------
    delete(word) {
        const deleteNode = (node, word, index) => {
            if (index === word.length) {
                if (!node.isEnd) {
                    return false;
                }
                delete node.isEnd;
                return Object.keys(node).length === 0;
            }

            let char = word[index];
            if (!node[char]) return false;

            const shouldDelete = deleteNode(node[char], word, index + 1);

            if (shouldDelete) {
                delete node[char];
                return Object.keys(node).length === 0;
            }

            return false;
        };

        deleteNode(this.root, word, 0);
    }
//---------------------------------
    findNode(prefix) {
        let node = this.root;
        for (let char of prefix) { 
            if (!node[char]) return null;
            node = node[char];
        }
        return node;
    }
//-----------------------------------
    autocomplete(prefix) {
        let node = this.findNode(prefix);
        if (!node) return [];
        const result = [];

        const dfs = (currentNode, path) => {
            if (currentNode.isEnd) result.push(path);
            for (let char in currentNode) {
                if (char !== 'isEnd') {
                    dfs(currentNode[char], path + char);
                }
            }
        };

        dfs(node, prefix);
        return result;
    }
//----------------------------------
    allWords() {
        const result = [];

        const dfs = (node, path) => {
            if (node.isEnd) result.push(path);
            for (let char in node) {
                if (char !== 'isEnd') {
                    dfs(node[char], path + char);
                }
            }
        };

        dfs(this.root, "");
        return result;
    }

    //---------------------------------
    longestCommonPrefix() {
        let node = this.root;
        let prefix = "";
    
        while (true) {
            const keys = Object.keys(node).filter(key => key !== 'isEnd');
    
            if (keys.length !== 1 || node.isEnd) {
                break;
            }
    
            const char = keys[0];
            prefix += char;
            node = node[char];
        }
    
        return prefix;
    }

    //------------------------
    
}
let trie = new Trie();
trie.insert('main');
trie.insert('mathew');
trie.insert('math');
trie.insert('mathe');
trie.insert('mat');
trie.insert('maba');
console.log(trie.longestCommonPrefix())
console.log(trie.allWords());           // ['abin', 'mat', 'mathe', 'mathew', 'math', 'sheeba']
console.log(trie.autocomplete("mat"));  // ['mat', 'mathe', 'mathew', 'math']
console.log(trie.findNode("mat"));
