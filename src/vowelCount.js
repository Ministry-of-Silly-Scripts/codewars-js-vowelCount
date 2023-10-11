function vowelCount(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;

  for (var i in str.split('')) {
    if (vowels.includes(str[i])) {
      count += 1;
    }
  }

  return count;
}

module.exports = vowelCount;
