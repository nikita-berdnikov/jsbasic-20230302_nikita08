function sumSalary(salaries) {
	let sum = 0;
    for (let key in salaries) {
		if (typeof salaries[key] === 'number') {
            sum += salaries[key];
		}
	}
	return sum;
}
