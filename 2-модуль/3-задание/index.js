let calculator = {
  // let calculator = {
  read() {
    this.a = +prompt('a',0);
    this.b = +prompt('b',0);
    },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b; 
  }
};
calculator.read(3, 5);
console.log(calculator.sum());
console.log(calculator.mul());
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
