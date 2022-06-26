export function cleanListItems(items, selectedItem) {
	const filteredItems = [...items];
	if (filteredItems.find((el) => el === selectedItem)) {
		// TODO: for some reason when selectedItem=0, this condition evaluates to false
		return filteredItems;
	} else {
		filteredItems.unshift(selectedItem);
		return filteredItems;
	}
}

export function round(number, digits = 0) {
	const decimalplaces = 10 ** digits;
	return Math.round(number * decimalplaces) / decimalplaces;
}

export function decimalToPct(decimal) {
	return Math.round(decimal * 100) + '%';
}
