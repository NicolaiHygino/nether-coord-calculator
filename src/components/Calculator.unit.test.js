import {toNether, toOverworld, tryConvert} from './Calculator';

describe('toNether tests', () => {
  test('toNether must return any number devided by 8', () => {
    expect(toNether(8)).toBe(1);
    expect(toNether(16)).toBe(2);
    expect(toNether(15)).toBeCloseTo(1.87);
  })
});

describe('toOverworld tests', () => {
  test('toOverworld must return any number times 8', () => {
    expect(toOverworld(1)).toBe(8);
    expect(toOverworld(3)).toBe(24);
    expect(toOverworld(8)).toBe(64);
  })
});

describe('tryConvert tests', () => {
  test('tryConvert 8 toOverworld must return 64', () => {
    expect(tryConvert(8, toOverworld)).toBe(64);
  });
  test('tryConvert 8 toNether must return 1', () => {
    expect(tryConvert(8, toNether)).toBe(1);
  });
  test('tryConvert toNether must return an int rounded to the floor', () => { 
    expect(tryConvert(9, toNether)).toBe(1);
  });
});