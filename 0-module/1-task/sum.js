function sum(a, b) {
    if (typeof(a) != "number" || typeof(b) != "number")
        throw new TypeError("Переменные должны быть числами!");
    return a+b;
}

module.exports = sum;
