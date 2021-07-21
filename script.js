//logest substring in a string

const getLengthOfLongestSubString = (s) => {
  if (s.length < 1) return s.length;
  let map = {};
  let maxLength = 0;
  
  let left = 0, right = 0, STRING_LENGTH = s.length;
  while( right < STRING_LENGTH) {
    let char = s[right];
    if (map[char] !== undefined && map[char] >= left)  {
      left = map[char] + 1;
      map[char] = right;
      right++;
    } else {
      map[char] = right;
      right++;
      maxLength = Math.max(maxLength, right - left)

    }
  }
  return maxLength;
}