function rev(x) {
  a = x.toString()
  a = a.split('').reverse().join('')
  a = parseInt(a)
  if(a >= Math.pow(2, 31)) return 0
  return x < 0 ? a - (a*2) : a
}
console.log(rev(-86212))
