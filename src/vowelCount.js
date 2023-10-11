function vowelCount(str) {
  var count = 0;

  for (var i in str.split('')) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o') {
      count += 1;
    }
  }

  return count;
}

module.exports = vowelCount;
