function calculate() {
    var expression = document.getElementById('expression').value;
    var result;
    expression = expression.replace(/sqrt/g, 'Math.sqrt');
    try {
        result = eval(expression);
        if (isNaN(result)) {
            throw "Invalid expression";
        }
        document.getElementById('result').innerHTML = 'Result: ' + result;
    } catch (error) {
        document.getElementById('result').innerHTML = 'Error: ' + error;
    }
}
