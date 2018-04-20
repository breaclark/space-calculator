import { Person } from "./../src/space.js";

describe("Person", function () {

  let person;

  beforeEach(function() {
    person = new Person('08/09/1992');
  });

  it("should be an instance of the person class", function() {
    expect(person).toEqual(jasmine.any(Person));
  });


});
