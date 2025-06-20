function lengthOfLongestSubstring(s) {
    let map = new Map();
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        if (map.has(char) && map.get(char) >= start) {
            start = map.get(char) + 1;
        }

        map.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}
console.log(lengthOfLongestSubstring("abcabcbb"));  // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));     // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));    // Output: 3 ("wke")
console.log(lengthOfLongestSubstring(""));          // Output: 0 (empty string)
console.log(lengthOfLongestSubstring("dvdf"));      // Output: 3 ("vdf")
console.log(lengthOfLongestSubstring("aab"));   