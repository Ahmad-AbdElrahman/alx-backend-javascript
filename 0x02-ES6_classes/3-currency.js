export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') throw TypeError('Code must be a string');
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    this.code = _code;
    this.name = _name;
  }

  get code() {
    return this._code;
  }

  set code(newcode) {
    if (typeof newcode !== 'string') throw TypeError('Code must be a string');
    this._code = newcode;
  }

  get name() {
    return this._name;
  }

  set name(newname) {
    if (typeof newname !== 'string') throw TypeError('Name must be a string');
    this._name = newname;
  }
}
