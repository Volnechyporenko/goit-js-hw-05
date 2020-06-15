class StringBuilder {

  constructor (string) {
  this.value = string;
  }

get string() {
  return this.value;
}

append(str) {
  this.value += str;
  }

prepend(str) {
  this.value = str+this.value;
    }

pad(str) {
  // this.value = str+this.value+str;
  this.append(str);
  this.prepend(str);
  }
}

const builder = new StringBuilder('.');

console.log(builder.string);
builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='