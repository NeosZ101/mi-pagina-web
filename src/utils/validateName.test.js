import { validateName } from './validateName';

test('Valida pablo o\'higgins como verdadero', () => {
    expect(validateName("pablo o'higgins")).toBe(true);
});
test('Rechaza nombres cortos', () => {
    expect(validateName("Jo")).toBe(false);
});