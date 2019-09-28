import Calculator, {Operation} from './Calc';

document.addEventListener('DOMContentLoaded', function () {

    // находим элемент, в котором будем отображать результат
    const resultBlock = document.getElementById('result');

    // создадим объект "калькулятор"
    const calc: Calculator = new Calculator(printResult);

    /**
     * Функция для вывода результата
     * @param value
     */
    function printResult(value: string) {
        resultBlock.innerText = value;
    }

    // найдём все кнопки с числами

    for (let i = 0; i < 10; i++) {
        let btn = document.getElementById('btn' + i);
        let inputNumber = i.toString();

        btn.onclick = function () {
            // передаём в калькулятор нажатое число
            calc.enterNumber(i);
        };

    }

    // кнопка "плюс"
    document.getElementById('plus').onclick = function () {
        // передаём в калькулятор выбранную операцию
        calc.apply(Operation.SUM);
    };

    document.getElementById('minus').onclick = function () {
        // передаём в калькулятор выбранную операцию
        calc.apply(Operation.SUB);

    };
    document.getElementById('mult').onclick = function () {
        // передаём в калькулятор выбранную операцию
        calc.apply(Operation.MUL);
    };
    document.getElementById('div').onclick = function () {
        // передаём в калькулятор выбранную операцию
        calc.apply(Operation.DIV);
    };

    document.getElementById('clear-button').onclick = function () {
        calc.clear();
        printResult('');
    };
});
