import { Person } from "./../src/space.js";

describe("Person", function () {

  let person;

  beforeEach(function() {
    person = new Person("1992, 08, 09");
  });

  it("should be an instance of the person class", function() {
    expect(person).toEqual(jasmine.any(Person));
  });

  it("should store constructor input as a Date object", function() {
    expect(person.birthdate).toEqual(jasmine.any(Date));
  });

  it("should return the number of seconds between birthdate and now in seconds", function() {
    expect(person.birthdateToNowSeconds()).toEqual(813490950);
  });


});
