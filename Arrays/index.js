let selectedColors=['red','blue'];
selectedColors[2]='green';
console.log(selectedColors);
console.log(selectedColors[0]);

console.log(selectedColors.length);

const numbers=[1,-1,2,3];

const items=numbers
  .filter(n=>n>=0)
  .map(n=>({value: n}))
  .filter(obj=>obj.value>1)
  .map(obj=>obj.value);

console.log(items);

