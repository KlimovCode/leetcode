function rev(x) {
  a = x.toString()
  a = a.split('').reverse().join('')
  a = parseInt(a)
  return x < 0 ? a - (a*2) : a
}
console.log(rev(-86212))
