class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length){
            return false;
        }

        const constS = {};
        const constT = {};

        for(let i = 0; i< s.length; i++){
            constS[s[i]] = (constS[s[i]]  || 0) + 1;
            constT[t[i]] = (constT[t[i]]  || 0) + 1;
        }

        for(const key in constS){
            if (constS[key] !== constT[key]) {
                return false;            
            }
        }
        return true;
    }
}
