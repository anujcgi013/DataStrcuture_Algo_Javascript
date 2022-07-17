// Input
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// Output
// [null,null,null,null,false,true,true,true]

// Explanation
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True

class WordDictionary {
    constructor() {
        this.root= {}
    }
    
     addWord(word) {
        // start with current node
        let node = this.root[word.length] = this.root[word.length] || []
        node.push(word)
        
    }
    
    search(word) {
        let wordArr = this.root[word.length] || false
        
        if(!wordArr) return false
        
        // Go over all added workds that have n characters  
        // Filter out words where every letter doesn't match with search or "."
		// Returns an array with all the matching words 
		return wordArr.filter(currentWord => {
            return currentWord.split("").every((letter, idx) => (letter === word[idx] || word[idx] === "."))
        }).length > 0
    }
};
