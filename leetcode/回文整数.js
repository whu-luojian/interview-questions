var isPalindrome = function(x) {
  if(x < 0 || (x % 10 === 0 && x !== 0)) {
      return false
  }
  
  let reverteNumber = 0
  while(x > reverteNumber) {
      reverteNumber = reverteNumber * 10 + x % 10
      x = (x - x % 10) / 10
  }
  return x === reverteNumber || x === parseInt(reverteNumber / 10)
};

isPalindrome(121)