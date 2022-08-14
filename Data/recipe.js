const recipe = {
	ingredients: [
		{ name: 'Whole wheat flour', quantity: 600, type: 'flour' },
		{ name: 'Water', quantity: 450, type: 'liquid' },
		{ name: 'Salt', quantity: 12, type: 'salt' },
		{ name: 'Levain/sourdough starter', quantity: 80, type: 'levain' },
	],
	method: [
		`Mix all ingredients together until no dry spots remain, then allow 8 hours of resting/rising time.`,
		`Dump all ingredients into an oiled or paper-lined loaf pan, then place in the refridgerator overnight.`,
		`Preheat oven to 450, then bake bread straight from the refridgerator for 1 hour.`,
	],
	recipeMetaData: {
		title: 'Whole Grain Bread',
		author: `Josh Petrovani Miller`,
		description: `A very low-maintainence & healthy bread recipe. I recommend using organic flour. Any combination of seeds is fine - I like to use a mix of flax, sunflower and sesame seeds.`,
		time: `18-24 hours`,
		numLoaves: 1,
	},
	defaults: {
		ingredientTypes: ['flour', 'liquid', 'salt', 'levain', 'yeast', 'mix-in'],
		doughMass: [650, 800, 1150, 1250, 1500],
		doughHydration: [0.7, 0.75, 0.78, 0.8, 0.85],
		numLoaves: [1, 2, 3, 4],
		levainPct: [0.1, 0.15, 0.2, 0.25, 0.3],
		stepsToTrack: ['Autolyze', 'Bulk Fermentation', 'Proof'],
	},
};

export default recipe;
