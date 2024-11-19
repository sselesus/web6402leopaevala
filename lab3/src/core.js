/**
 * Функция, которая проверяет, является ли число целым используя побитовые операторы
 * @param {*} n
 */
function isInteger(n) {
    return (n | 0) === n;
}

/**
 * Функция, которая возвращает массив четных чисел от 2 до 20 включительно
 */
function even() {
    return Array.from({ length: 10 }, (_, i) => (i + 1) * 2);
}

/**
 * Функция, считающая сумму чисел до заданного используя цикл
 * @param {*} n
 */
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/**
 * Функция, считающая сумму чисел до заданного используя рекурсию
 * @param {*} n
 */
function recSumTo(n) {
    if (n === 1) return 1;
    return n + recSumTo(n - 1);
}

/**
 * Функция, считающая факториал заданного числа
 * @param {*} n
 */
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

/**
 * Функция, которая определяет, является ли число двойкой, возведенной в степень
 * @param {*} n
 */
function isBinary(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

/**
 * Функция, которая находит N-е число Фибоначчи
 * @param {*} n
 */
function fibonacci(n) {
    if (n === 1 || n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

/** Функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn) {
    let value = initialValue;
    return operatorFn
        ? (newValue) => (value = operatorFn(value, newValue))
        : () => value;
}

/**
 * Функция создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start = 0, step = 1) {
    let current = start;
    return () => {
        const result = current;
        current += step;
        return result;
    };
}

/**
 * Функция, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) {
    if (Object.is(firstObject, secondObject)) return true;

    if (
        typeof firstObject !== 'object' ||
        typeof secondObject !== 'object' ||
        firstObject === null ||
        secondObject === null
    ) {
        return false;
    }

    const keysA = Reflect.ownKeys(firstObject);
    const keysB = Reflect.ownKeys(secondObject);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
        if (!keysB.includes(key) || !deepEqual(firstObject[key], secondObject[key])) {
            return false;
        }
    }

    return true;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
