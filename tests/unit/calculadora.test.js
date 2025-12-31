const calculadora = require('../../models/calculadora.js');

test('somar 2 + 3 deve retornar 5', () => {
  expect(calculadora.somar(2, 3)).toBe(5);
});

test('somar com parâmetro não numérico deve lançar um erro', () => {
  expect(() => {
    calculadora.somar(2, '3');
  }).toThrow('Os parâmetros devem ser números.');
});

test('subtrair 5 - 2 deve retornar 3', () => {
  expect(calculadora.subtrair(5, 2)).toBe(3);
});

test('subtrair com parâmetro não numérico deve lançar um erro', () => {
  expect(() => {
    calculadora.subtrair(5, '2');
  }).toThrow('Os parâmetros devem ser números.');
});

test('multiplicar 4 * 3 deve retornar 12', () => {
  expect(calculadora.multiplicar(4, 3)).toBe(12);
});

test('multiplicar com parâmetro não numérico deve lançar um erro', () => {
  expect(() => {
    calculadora.multiplicar(4, '3');
  }).toThrow('Os parâmetros devem ser números.');
});

test('dividir 10 / 2 deve retornar 5', () => {
  expect(calculadora.dividir(10, 2)).toBe(5);
});

test('dividir por zero deve lançar um erro', () => {
  expect(() => {
    calculadora.dividir(10, 0);
  }).toThrow('Divisão por zero não é permitida.');
});

test('dividir com parâmetro não numérico deve lançar um erro', () => {
    expect(() => {
        calculadora.dividir(10, '2');
    }).toThrow('Os parâmetros devem ser números.');
});
