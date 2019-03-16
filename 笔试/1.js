function fn(n){
  let money = 1024 - n
  let res = 0
  res += parseInt(money / 64)
  let money2 = money % 64
  res += parseInt(money2 / 16)
  let money3 = money2 % 16
  res += parseInt(money3 / 4)
  res += money3 % 4
  return res
}
console.log(fn(200))