export enum Operation {
    SUM = 1,
    SUB,
    DIV,
    MUL,
}

export default class Calculator {


    constructor(onDisplayedValueChange: ((value: string) => void)) {
        this.onDisplayedValueChange = onDisplayedValueChange;
    }

    private _currentResult: number = null;
    private inputNumber: string = '';
    private lastOperation: Operation = null;
    private _display: string = '';
    private onDisplayedValueChange: ((value: string) => void);


    public enterNumber(value: number) {
        this.inputNumber += value.toString();
        this.updateDisplayState();
    }

    public apply(operation: Operation) {
        if (this.currentResult) {
            let firstOperand = this.currentResult;
            let secondOperand = parseFloat(this.inputNumber);
            let result = this.applyOperation(firstOperand, secondOperand, this.lastOperation);
            this.currentResult = result;
            this.lastOperation = operation;

        } else {
            if (this.inputNumber) {
                this.currentResult = parseFloat(this.inputNumber);
                this.lastOperation = operation;
            }

        }

        this.inputNumber = '';
        this.updateDisplayState();
    }


    applyOperation(firstOperand: number, secondOperand: number, operation: Operation) {
        switch (operation) {
            case Operation.SUM:
                return firstOperand + secondOperand;
            case Operation.SUB:
                return firstOperand - secondOperand;
            case Operation.DIV:
                return firstOperand / secondOperand;
            case Operation.MUL:
                return firstOperand * secondOperand;
        }
    }

    set operation(value: Operation) {
        this.lastOperation = value;
    }

    get currentResult() {
        return this._currentResult;
    }

    set currentResult(value) {
        this._currentResult = value;
    }

    updateDisplayState() {
        const displayString = this.calculateDisplayState();
        this.display = displayString;
    }

    calculateDisplayState() {
        let displayedString = '';
        if (this.currentResult) {
            displayedString += this.currentResult;
        }

        if (this.lastOperation) {
            let operationSign = null;
            switch (+this.lastOperation) {
                case Operation.SUM:
                    operationSign = '+';
                    break;
                case Operation.SUB:
                    operationSign = '-';
                    break;
                case Operation.DIV:
                    operationSign = '/';
                    break;
                case Operation.MUL:
                    operationSign = '*';
                    break;
            }
            displayedString += ' ' + operationSign + ' ';
        }

        if (this.inputNumber) {
            displayedString += this.inputNumber;
        }

        return displayedString;
    }

    set display(value: string) {
        console.log(value);
        this._display = value;
        this.onDisplayedValueChange(value);
    }

    clear() {
        this.currentResult = 0;
    }


}