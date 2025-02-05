import Validator from '../Validator';

test.each([
  ['test_test', true],
  ['test-test', true],
  ['test123_test', true],
  ['test-123test', true]
])('testing validateUsername method with valid data', (name, expected) => {
  let validator = new Validator(name);

  expect(validator.validateUsername()).toEqual(expected);
});

test.each([
  ['1test'],
  ['test1'],
  ['test1234test'],
  ['_test'],
  ['test-']
])('testing validateUsername method with invalid data', (name) => {
  expect(() => {
    const validator = new Validator(name);
    validator.validateUsername();
  }).toThrow(new Error("Недопустимое имя пользователя"));
});
