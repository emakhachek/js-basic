// Task #1
const a = 10;
console.log(parseInt(a + '0'));

// Task #2
const stringValue = `Amazon annual revenue of US$232.887 billion`;
const regexp = new RegExp(/\d+.\d+/);
let annualRevenue = +stringValue.match(regexp);
if (typeof annualRevenue === "number") {
    console.log(`Annual revenue is: ${annualRevenue *= 1e9}`);
    const monthlyIncome = annualRevenue / 12;
    console.log(`Monthly income is: ${Math.round(monthlyIncome)}`);
} else {
    console.log('annualRevenue is not a number');
}

// Task #3
let c = 1;
console.log(++c);
console.log(++c);