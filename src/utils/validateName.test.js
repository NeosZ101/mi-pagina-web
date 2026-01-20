import { filterAllowedValuesForName } from './filterAllowedValuesForName';

test("Valida pablo o'higgins como verdadero", () => {
    expect(filterAllowedValuesForName("pablo o'higgins")).toBe(true);
});
test('Rechazar false si el nombre es un valo vacio',() => {
    expect(filterAllowedValuesForName("")).toBe(false);
});
test('Rechaza nombres cortos', () => {
    expect(filterAllowedValuesForName("Jo")).toBe(false);
});
test('Rechazar comillas en nombres que no sean o\'higgins',() => {
    expect(filterAllowedValuesForName("pablo'")).toBe(false);
    expect(filterAllowedValuesForName("d'pablo")).toBe(false);
});
test('Rechaza nombre que tengan numeros',() => {
    expect(filterAllowedValuesForName("Pablo123")).toBe(false);
});
test('Rechaza nombres con simbolos espeiales prohibidos', () => {
    expect(filterAllowedValuesForName("Pablo#$%")).toBe(false);
    expect(filterAllowedValuesForName("Pablo_ohiggins")).toBe(false);
});
test('Rechaza a ohiggins si esta mal escrito',() => {
    expect(filterAllowedValuesForName("Benando o'higgings")).toBe(false);
});