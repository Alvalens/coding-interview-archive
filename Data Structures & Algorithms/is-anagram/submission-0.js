class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let fs = String(s).split('').sort().join('');
        let sc = String(t).split('').sort().join('');
        if (fs === sc) {
            return true
        } 
        return false
        }
}
