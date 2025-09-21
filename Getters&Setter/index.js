const person={
  firstName:'Adheesh',
  lastName:'Chopra',
  get fullName(){
    return `${person.firstName} ${person.lastName}`
  },
  set fullName(value){
    const parts = value.split(' ');
    this.firstName=parts[0];
    this.lastName=parts[1];
  }
};

person.fullName='John Smith';

// getters: access properties
// setters: change or mutate them

console.log(person);