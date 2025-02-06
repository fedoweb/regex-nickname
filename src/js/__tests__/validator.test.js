import Validator from '../Validator';

test.each([
  ['test_test', true],
  ['test-test', true],
  ['test123_test', true],
  ['test-123test', true],
  ['1test', false],
  ['test1', false],
  ['test1234test', false],
  ['_test', false],
  ['test-', false]
])('testing validateUsername method with valid data', (name, expected) => {
  let validator = new Validator();

  expect(validator.validateUsername(name)).toEqual(expected);
});
