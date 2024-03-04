export default class Users {
  constructor(email, name) {
    this._id = email;
    this._name = name;
  }

  greetUser() {
    return `Hello, welcome ${this._name}`;
  }
}
