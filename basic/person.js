console.log('before ',module)
console.log('before module.exports ',module.exports);
console.log('before exports ',exports)

console.log('=================================',exports==module.exports)
module.exports = Person;

function Person (name) {
  this.name = name;
};

Person.prototype.talk = function () {
  console.log('my name is', this.name);
};
console.log('=================================',exports==module.exports)
console.log('after ',module)
console.log('after module.exports ',module.exports)
console.log('after exports ',exports)