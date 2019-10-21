// Task #2
const stringValue = `Amazon annual revenue of US$232.887 billion`;
let r = new RegExp(/\d+.\d+/);
const annualRevenue = +stringValue.match(r) * 1e9;
console.log(annualRevenue);
const monthlyIncome = annualRevenue / 12;
console.log(Math.round(monthlyIncome));
  
// Task #3
let c = 1;
console.log(++c);
console.log(++c);