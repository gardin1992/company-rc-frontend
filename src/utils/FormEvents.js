const inputParsers = {
  date(input) {
    const [month, day, year] = input.split('/');
    return `${year}-${month}-${day}`;
  },
  uppercase(input) {
    return input.toUpperCase();
  },
  number(input) {
    return parseFloat(input);
  },
};

export const createFormData = (form) => {

	const data = new FormData(form);

	for (let name of data.keys()) {

		const input = form.elements[name];
		const parserName = input.dataset.parse;

		if (parserName) {
	
			const parser = inputParsers[parserName];
			const parsedValue = parser(data.get(name));
	
			data.set(name, parsedValue);
		}
	}

	return data;
};