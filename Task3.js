"use strict"

let res
res = 10 + 10 + "10"
console.log(res)
res = null
res = 10 + "10" + 10
console.log(res)
res = null
res = 10 + 10 + +"10"
console.log(res)
res = null
res = 10/-""
console.log(res)
res = null
res = 10/+"2,5"
console.log(res)

/*
1 - 2010 (строка)сначалал идёт сложение чисел потом (20) потом превращаются в строку 2010
2 - 101010 (строка)число превращается в строку и прибаляется к строке, потом снова, получаем дописывание
3 - 20 (Число) После правильной расстановки пробелов получил число 30, так как воспользовались унарным плюсом для преобразования строки в число
4 - -Infinity получили отрицательную бесконечность так как с помощью унарного минуса превратили пустую строку в -0
5 - NaN Не может провести операцию с данными значениями, выводит число not a number,
при этом если заменить запятую на точку, то получим ответ 4
*/