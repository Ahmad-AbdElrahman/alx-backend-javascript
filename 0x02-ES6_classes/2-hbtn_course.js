export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newname) {
    if (typeof (newname) === 'string') {
      this._name = newname;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(newlength) {
    if (typeof (newlength) === 'integer') {
      this._length = newlength
    } else {
      throw TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set Students(newsudens) {
    students.forEach((student) => { 
      if (!typeof (student) === 'string') {
        throw TypeError('students must be an array of strings')
        }
      this._students = newstudents;
    });
  }
}
