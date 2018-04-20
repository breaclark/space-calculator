class Person {
  constructor (birthdate) {
    // needs to be in "year, month, day" format
    this.birthdate = new Date(birthdate);
    this.now = new Date(2018, 4, 20, 9, 42, 30, 0);
    this.difference = this.now - this.birthdate;
  }

  birthdateToNowSeconds () {
    // 1000 milliseconds in a second
    return this.difference/1000;
  }

  mercuryAge () {
    // 31556952000 milliseconds in a year
    return (this.difference/31556952000)*0.24;
  }

  venusAge () {
    // 31556952000 milliseconds in a year
    return (this.difference/31556952000)*0.62;
  }

  marsAge () {
    // 31556952000 milliseconds in a year
    return (this.difference/31556952000)*1.88;
  }

}

export { Person };
