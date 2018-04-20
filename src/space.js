class Person {
  constructor (birthdate) {
    //needs to be in "year, month, day" format
    this.birthdate = new Date(birthdate);
  }

  birthdateToNowSeconds () {
    let today = new Date(2018, 4, 20, 9, 42, 30, 0);
    //this is in milliseconds
    let difference = today - this.birthdate;
    return difference/1000;
  }
}

export { Person };
