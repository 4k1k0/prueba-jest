const numeroMayor = (n) => {
  return n <= 0 ? 0 : Number(n.toString().split('').sort().reverse().join(''))
}

module.exports = numeroMayor
