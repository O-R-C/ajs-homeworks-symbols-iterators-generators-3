import canIterate from '../canIterate';

const cases = [
  [new Map(), true],
  [new Set(), true],
  [null, false],
  [undefined, false],
  [NaN, false],
  [10, false],
  [{}, false],
  ['Netology', true],
  [[], true],
];

test.each(cases)('%p, %p', (item, expected) => {
  expect(canIterate(item)).toBe(expected);
});
