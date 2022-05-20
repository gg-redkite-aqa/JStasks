let str1 = 'ahb acb aeb aeeb adcb axeb';
let newStr1 = str1.match(/[a][\S][b]/g);
console.log(newStr1)

let str2 = '2+3 223 2223';
let newStr2 = str2.match(/[\d][+][\d]/g);
console.log(newStr2)