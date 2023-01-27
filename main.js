
function calc(a, b, operation) {
	if (isNaN(a)|| isNaN(b)) {
		return 'ошибка';
	}
	switch (operation) {
		case 'add':
			return a + b;
			break;
		case 'substract' :
			return a - b;
			break
		case 'multi' :
			return a * b;
			break
	}
}


console.log(calc(5, 2, 'add'));
console.log(calc(10, 2, 'substract'));
console.log(calc('f', 3, 'multi'));