export function yearsToSeconds (input) {
  // 31556952 seconds in a year
  return input * 31556952;
}

export function differenceInSeconds (input1, input2) {
  let date1 = new Date(input1);
  let date2 = new Date(input2);
  // 1000 milliseconds in a second
  return (date2 - date1)/1000;
}

class Person {
  constructor (birthdate) {
    this.birthdate = new Date(birthdate);
    this.now = new Date(Date.now());
    //this.now = new Date(2018, 4, 20, 9, 42, 30, 0) // used for testing;
    this.difference = this.now - this.birthdate;
  }

  // 1000 milliseconds in a second
  // 31556952000 milliseconds in a year
  // 78.7 years in the average american lifespan

  birthdateToNowSeconds () {
    return this.difference/1000;
  }

  mercuryAge () {
    return (this.difference/31556952000)*0.24;
  }

  venusAge () {
    return (this.difference/31556952000)*0.62;
  }

  marsAge () {
    return (this.difference/31556952000)*1.88;
  }

  jupiterAge () {
    return (this.difference/31556952000)*11.86;
  }

  mercuryLifeLeft () {
    return (78.7 - this.difference/31556952000)*0.24;
  }

  venusLifeLeft () {
    return (78.7 - this.difference/31556952000)*0.62;
  }

  marsLifeLeft () {
    return (78.7 - this.difference/31556952000)*1.88;
  }

  jupiterLifeLeft () {
    return (78.7 - this.difference/31556952000)*11.86;
  }

}

export { Person };
