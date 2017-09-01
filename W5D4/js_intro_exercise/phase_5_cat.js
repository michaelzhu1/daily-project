function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatment = function () {
  return `${this.owner} loves ${this.name}`;
};

Cat.prototype.meow = function () {
  return 'meow!';
};
