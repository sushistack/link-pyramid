const NUMS = [...Array(10).keys()];
const LOWER_ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const UPPER_ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const genKey = (len = 10) => {
  let key = '';
  const candidates = NUMS.concat(LOWER_ALPHABET).concat(UPPER_ALPHABET);
  for (let i = 0; i < len; i += 1) {
    key += candidates[Math.floor(Math.random()*items.length)];
  }
  return key;
}