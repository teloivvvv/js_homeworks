//"use strict"

var result = 'number' + 3 + 3; // string + number = string
console.log(result); // number33

var result = null + 3; // null = 0; 0 + 3 = 3
console.log(result); // 3

var result = 5 && "qwerty"; // (обидва істинні, поверне останнє)
console.log(result); // qwerty

var result = +'40' + +'2' + "hillel"; // унарний "+"" перетворює string на number 
console.log(result); // 42hillel

var result = '10' - 5 === 6; // Повертає true, якщо значення рівні і мають однаковий тип, і false - якщо вони різні; 10-5=5; 5 === 6 - false
console.log(result); // false

var result = true + false; // true → 1; false → 0
console.log(result); // 1

var result = '4px' - 3; // оператор "-" не виконує конкатенацію, а працює лише з типом даних number 
console.log(result); // NaN

var result = '4' - 3; // string "4" приводиться до number 
console.log(result); // 1

var result = '6' + 3 ** 0; // 3 ** 0 → 1; string + number = string 
console.log(result); // '61'

var result = 12 / '6'; // оператор "/" не виконує конкатенацію, а працює лише з типом даних number 
console.log(result); // 2

var result = '10' + (5 === 6); // Повертає true, якщо значення рівні і мають однаковий тип, і false - якщо вони різні; 5 === 6 - false; конкатенція '10' + false
console.log(result); // 10false

var result = null == ''; // оператор == не робить перетворення між null і порожнім рядком, бо null спеціальне значення, яке не може бути перетворене на інші значення (окрім себе)
console.log(result); // false

var result = 3 ** (9 / 3); // 3 в степені (9/3=3); 3 * 3 * 3 = 27
console.log(result); // 27

var result = !!'false' == !!'true'; // !! - перетворення до boolean; == - повертає true, якщо значення рівні, і false - якщо нерівні; false дорівнює true, бо 'false' не є порожнім рядком
console.log(result); // true 

var result = 0 || '0' && 1; // || - Повертає перше ІСТИННЕ значення або останнє значення, якщо всі хибні (0); && - Повертає перше ХИБНЕ значення або останнє значення, якщо всі істинні
console.log(result); // 1; 0 та 1 оба істинні значення, але 1 останнє значення

var result = (+null == false) < 1; // +null = 0, false = 0 (== приводить до одного типу даних); true < 1 (true=1 < 1)
console.log(result); // false 

var result = false && true || true; // && - повертає true, якщо обидва операнди є true, інакше повертає false; || - повертає true, якщо хоча б один з операндів є true, інакше повертає false
console.log(result); // false || true = true

var result = false && (false || true); // false && (true); && - повертає true, якщо обидва операнди є true, інакше повертає false
console.log(result); // false

var result = (+null == false) < 1 ** 5; // +null = 0, false = 0 (== приводить до одного типу даних); 1 ** 5 = 1; 1 < 1
console.log(result); // false