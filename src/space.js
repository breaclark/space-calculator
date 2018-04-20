class Person {
  constructor (birthdate) {
    //needs to be in "year, month, day" format
    this.birthdate = new Date(birthdate);
    this.now = new Date(2018, 4, 20, 9, 42, 30, 0);
    this.difference = this.now - this.birthdate;
  }

  birthdateToNowSeconds () {
    return this.difference/1000;
  }

  mercuryAge () {
    return (this.difference/31,556,952,000)*0.24;
  }

}

export { Person };
