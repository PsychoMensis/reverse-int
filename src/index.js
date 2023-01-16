module.exports = function reverse (n) {
    let result = ''
    n = n.toString().replace('-', '');
    for (let i = n.length-1; i >= 0; i--) {
        result = result + n[i]
    }
  return result
}

