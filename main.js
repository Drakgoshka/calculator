function calc(a, b, operation) {
	if (isNaN(a)|| isNaN(b)) {
		return 'ошибка';
	}if (operation === 'add') {
		return a + b;
	}
	else if (operation === 'substract') {
		return a - b;
	}
	else if (operation === "multi" ) {
		return a * b;
	}
}



console.log(calc(10, 2, 'substract'));
console.log(calc('f', 3, 'multi'));