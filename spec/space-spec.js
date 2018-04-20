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

  it("should return the person's age in Mercury years", function() {
    expect(person.mercuryAge()).toBeGreaterThan(6.18);
    expect(person.mercuryAge()).toBeLessThan(6.19);
  });

  it("should return the person's age in Venus years", function() {
    expect(person.venusAge()).toBeGreaterThan(15.98);
    expect(person.venusAge()).toBeLessThan(15.99);
  });

  it("should return the person's age in Mars years", function() {
    expect(person.marsAge()).toBeGreaterThan(48.46);
    expect(person.marsAge()).toBeLessThan(48.47);
  });

  it("should return the person's age in Jupiter years", function() {
    expect(person.jupiterAge()).toBeGreaterThan(305.73);
    expect(person.jupiterAge()).toBeLessThan(305.74);
  });

});
