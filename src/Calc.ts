export enum Operation {
    SUM,
    SUB,
    DIV,
    MUL
}

export default class Calculator {

    private _currentResult = 0;

    private lastOperation: Operation = null;

    public apply(value: number) {
        if (this.lastOperation != null) {
            // если есть операция -- выполняем её
            switch (this.lastOperation) {
                case Operation.SUM:
                    this._currentResult += value;
                    break;
                case Operation.SUB:
                    this._currentResult -= value;
                    break;
                case Operation.DIV:
                    this._currentResult /= value;
                    break;
                case Operation.MUL:
                    this._currentResult *= value;
                    break;

            }
        } else {
            if (this._currentResult != 0) {
                this._currentResult = Number(String(this._currentResult) + String(value))
            } else {
                // иначе просто делаем выбранное число текущим результатом
                this._currentResult = value;
            }
        }
    }

    set operation(value: Operation) {
        this.lastOperation = value;
    }

    get currentResult() {
        return this._currentResult;
    }
}