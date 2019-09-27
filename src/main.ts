import Calculator, {Operation} from './Calc';

document.addEventListener('DOMContentLoaded', function () {

    // находим элемент, в котором будем отображать результат
    const resultBlock = document.getElementById('result');

    // создадим объект "калькулятор"
    const calc: Calculator = new Calculator();

    /**
     * Функция для вывода результата
     * @param value
     */
    function printResult(value: number) {
        resultBlock.innerText = '' + value;
    }

    // найдём все кнопки с числами
    for (let i = 0; i < 10; i++) {
        let btn = document.getElementById('btn' + i);

        btn.onclick = function () {
            // передаём в калькулятор нажатое число
            calc.apply(i);
            // сбрасываем операцию
            calc.operation = null;
            // выводим результат
            printResult(calc.currentResult);
        };

    }

    // кнопка "плюс"
    document.getElementById('plus').onclick = function () {
        // передаём в калькулятор выбранную операцию
        calc.operation  = Operation.SUM;
    };

});
