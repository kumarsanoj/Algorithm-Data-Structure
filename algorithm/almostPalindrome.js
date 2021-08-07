/**
 * @param {string} s
 * @return {boolean}
 */
 function  IsValidSubPalindrome(s, left, right) {
    while(left < right) {
      if (s[left] === s[right]) {
          left++;
          right--;
      } else {
         return false;
          
      }
  }
  return true;
  }
   var validPalindrome = function(s) {
    if(s.length === 0) return false;
    if(s.length === 1) return true;
     s = s.replace(/[^A-Za-z0-9]/g, '');
    s = s.toLowerCase();
  
    let left = 0, right = s.length - 1;
    while(left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
           return (IsValidSubPalindrome(s, left + 1, right) || IsValidSubPalindrome(s, left, right -1 ))
            
        }
    }
  return true;
  };