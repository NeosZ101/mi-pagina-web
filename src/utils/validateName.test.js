import { filterAllowedValuesForName } from './filterAllowedValuesForName';

test("Valida pablo o'higgins como verdadero", () => {
    expect(filterAllowedValuesForName("pablo o'higgins")).toBe(true);
});
test('Rechaza nombres cortos', () => {
    expect(filterAllowedValuesForName("Jo")).toBe(false);
});