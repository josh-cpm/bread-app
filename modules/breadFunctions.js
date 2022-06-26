export const calcDoughMass = (ingredients) => {
	return ingredients.reduce((prev, cur) => cur.quantity + prev, 0);
};

export function sumIngByType(ingredients, type) {
	const total = ingredients
		.filter((el) => el.type === type)
		.reduce((prev, cur) => prev + cur.quantity, 0);
	return total;
}

/**
 *
 * @param {*} ingredients
 * @returns a new ingredients array with a bakers percentage added to each ingredient
 */
function addBakersPercentToRecipe(ingredients) {
	const ings = [...ingredients];
	const totalFlour = sumIngByType(ingredients, 'flour');
	ings.forEach((ing) => (ing.bPct = ing.quantity / totalFlour));
	return ings;
}

/**
 * Function to return flour and water amounts from
 * an hydration ratio. Useful for levain and for doughs.
 *
 * @param {number} mass
 * @param {number: percent as decimal} hydration
 */
function hydrationObject(mass, hydration) {
	const flour = mass / (1 + hydration);
	const water = mass - flour;
	return {
		mass: mass,
		hydration: hydration,
		flour: flour,
		water: water,
	};
}

export const calcDoughHydration = (ingredients) => {
	const water = sumIngByType(ingredients, 'liquid');
	const flour = sumIngByType(ingredients, 'flour');
	return water / flour;
};

export const calcEndHydration = (ingredients) => {
	const water = sumIngByType(ingredients, 'liquid');
	const levainWater = sumIngByType(ingredients, 'levain') / 2;
	const flour = sumIngByType(ingredients, 'flour');
	return (water + levainWater) / flour;
};

export const calcLevainPct = (ingredients) => {
	const levain = ingredients
		.filter((el) => el.type === 'levain')
		.reduce((prev, cur) => prev + cur.quantity, 0);
	const flour = ingredients
		.filter((el) => el.type === 'flour')
		.reduce((prev, cur) => prev + cur.quantity, 0);
	return levain / flour;
};

/**
 *
 * @param {Array} ingredients
 * @param {Number} newMass
 * @returns A new ingredients array.
 */
export function changeDoughMass(ingredients, newMass, numLoves = 1) {
	const currentMass = calcDoughMass(ingredients);
	const modifier = parseInt(newMass) / currentMass;
	const newIngredients = ingredients.map((ing) => {
		let q = ing.quantity * modifier * numLoves;
		ing.quantity = q;
		return ing;
	});
	return newIngredients;
}

export function changeHydration(ingredients, newHydration) {
	let newIngredients = [...ingredients];
	// get the mass of the things that won't change when you modify the dough hydration
	// the levain, salt, mix-ins, etc
	const nonHydrationIngMass = ingredients
		.filter((el) => el.type !== 'flour' && el.type !== 'liquid')
		.reduce((prev, cur) => prev + cur.quantity, 0);
	const doughMass = calcDoughMass(ingredients);
	const flourWaterMass = doughMass - nonHydrationIngMass;

	//calculate and updaate the amount of liquid in the dough
	const dough = hydrationObject(flourWaterMass, newHydration);

	//scale the amount of water to match the correct hydration
	const liquidMultiplier = dough.water / sumIngByType(ingredients, 'liquid');
	newIngredients.forEach((el) => {
		if (el.type === 'liquid') {
			el.quantity *= liquidMultiplier;
		}
	});

	// scale all the flours up or down
	const flourMultiplier = dough.flour / sumIngByType(ingredients, 'flour');
	newIngredients.forEach((el) => {
		if (el.type === 'flour') {
			el.quantity *= flourMultiplier;
		}
	});
	return newIngredients;
}

export function changeLevainPct(ingredients, newLevainPct) {
	// add bakers % to every ingredient
	const newIngredients = addBakersPercentToRecipe(ingredients);
	const doughMass = calcDoughMass(ingredients);

	// figure out how much flour should be in the new dough
	let totalPercents = 0;
	newIngredients.forEach((ing) => {
		if (ing.type !== 'levain') {
			totalPercents += ing.bPct;
		} else {
			totalPercents += newLevainPct;
		}
	});
	const newFlourTotal = doughMass / totalPercents;

	// use new flour total to adjust every ingredient to the correct quantity using bakers %
	newIngredients.forEach((ing) => {
		if (ing.type !== 'levain') {
			ing.quantity = newFlourTotal * ing.bPct;
		} else {
			ing.quantity = newFlourTotal * newLevainPct;
		}
	});
	return newIngredients;
}

export function changeLoafNumber(ingredients, newLoafNumber, oldLoafNumber) {
	const modifier = newLoafNumber / oldLoafNumber;
	const newIngredients = [...ingredients];
	newIngredients.forEach((ing) => (ing.quantity *= modifier));
	return newIngredients;
}
