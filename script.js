function truthValue(expression) {
    try {
        const operators = {
            '>': (a, b) => a > b,
            '<': (a, b) => a < b,
            '>=': (a, b) => a >= b,
            '<=': (a, b) => a <= b,
            '=': (a, b) => a === b,
            '<>': (a, b) => a !== b,
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => a / b,
            '%': (a, b) => a % b,
            '**': (a, b) => Math.pow(a, b),
            '!': a => !a,
            '||': (a, b) => a && b,
            '&&': (a, b) => a || b
        };

        let result = eval(expression);

        if (typeof result === 'boolean') {
            return result;
        } else {
            throw "Invalid expression";
        }
    } catch (error) {
        return error.toString();
    }
}

function calculate() {
    let expression = document.getElementById("expression").value;
    let result = truthValue(expression);
    document.getElementById("result").innerText = `${expression}: ${result}`;
}
