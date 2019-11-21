const user = {
  name: 'Test',
  surname: 'Testing',
};

function greetUser(user, getNameFunc) {
  return getNameFunc(user) ? `I am happy to see you ${getNameFunc(user)}'` : ``;
}
const getGreetNameByField = (field) => (function f(user) { return user[field]; });

console.log(greetUser(user, getGreetNameByField('name'))); // I am happy to see you Test
console.log(greetUser(user, getGreetNameByField('surname'))); // I am happy to see you Testing
console.log(greetUser(user, getGreetNameByField('nickname'))); //
