import { StyleSheet, Text, View } from 'react-native';
import gs from '../../GlobalStyles.js';
import {
	calcDoughMass,
	calcDoughHydration,
	calcLevainPct,
	changeDoughMass,
	changeHydration,
	changeLevainPct,
	changeLoafNumber,
} from '../../modules/breadFunctions.js';

import DoughMassController from '../doughControllers/DoughMassController.js';
import HydrationController from '../doughControllers/HydrationController.js';
import LevainController from '../doughControllers/LevainController.js';
import LoafNumberController from '../doughControllers/LoafNumberController.js';

export default function Header(props) {
	function handleDoughMassPress(amount) {
		const newRecipe = changeDoughMass(props.ingredients, amount, numLoaves);
		updateIngredients(newRecipe);
	}

	function handleHydrationPress(hydration) {
		const newRecipe = changeHydration(props.ingredients, hydration);
		updateIngredients(newRecipe);
	}

	function handleLevainPctPress(levainPct) {
		const newRecipe = changeLevainPct(props.ingredients, levainPct);
		updateIngredients(newRecipe);
	}

	function handleLoafNumberPress(newNumLoaves) {
		let newRecipe = changeLoafNumber(
			props.ingredients,
			newNumLoaves,
			props.numLoaves
		);
		updateIngredients(newRecipe);
		updateNumLoaves(newNumLoaves);
	}

	function updateIngredients(newIngredients) {
		props.onIngredientsUpdate(newIngredients);
	}
	function updateNumLoaves(newNumLoaves) {
		props.onNumLoavesUpdate(newNumLoaves);
	}

	const doughHydration = calcDoughHydration(props.ingredients);
	const defaultDoughHydrationList = props.recipeDefaults.doughHydration;
	const levainPct = calcLevainPct(props.ingredients);
	const defaultLevainPctList = props.recipeDefaults.levainPct;
	const numLoaves = props.numLoaves;
	const defaultNumLoavesList = props.recipeDefaults.numLoaves;
	const defaultDoughMassList = props.recipeDefaults.doughMass;
	const doughMass = calcDoughMass(props.ingredients) / numLoaves;

	return (
		<View style={styles.section}>
			<Text style={styles.title}>{props.recipeMetaData.title}</Text>
			<DoughMassController
				doughMassList={defaultDoughMassList}
				doughMass={doughMass}
				handleDoughMassPress={handleDoughMassPress}
			/>
			<HydrationController
				defaultDoughHydrationList={defaultDoughHydrationList}
				doughHydration={doughHydration}
				handleHydrationPress={handleHydrationPress}
			/>
			<LevainController
				levainPct={levainPct}
				defaultLevainPctList={defaultLevainPctList}
				onLevainPctPress={handleLevainPctPress}
			/>
			<LoafNumberController
				numLoaves={numLoaves}
				loafNumberList={defaultNumLoavesList}
				onLoafNumPress={handleLoafNumberPress}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	...gs,
	extraSpace: {
		marginBottom: 10,
	},
});
