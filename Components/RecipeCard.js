import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { useState } from 'react';
import gs from '../GlobalStyles.js';
import initialRecipe from '../Data/recipe.js';

import RecipeHeader from './cardSections/RecipeHeader.js';
import Ingredients from './cardSections/Ingredients.js';
import TimeTrackers from './cardSections/TimeTrackers.js';
import UsefulInfo from './cardSections/UsefulInfo.js';
import { TextButton } from './reusible/Buttons';

export default function RecipeView(props) {
	//TODO: Update app UI so mass isn't confusing when you're working with multiple loaves
	//TODO: Let users add ad-hoc amounts for dough mass, hydration, etc

	// State
	const [ingredients, setIngredients] = useState(initialRecipe.ingredients);
	const [numLoaves, setNumLoaves] = useState(
		initialRecipe.recipeMetaData.numLoaves
	);

	// ReadOnly
	const stepsToTrack = initialRecipe.defaults.stepsToTrack;
	const recipeDefaults = initialRecipe.defaults;
	const recipeMetaData = initialRecipe.recipeMetaData;

	// State updaters
	function handleIngredientsUpdate(newIngredients) {
		setIngredients(newIngredients);
	}
	function handleNumLoavesUpdate(numLoaves) {
		setNumLoaves(numLoaves);
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.card}>
				<TextButton title="Back"></TextButton>
				<RecipeHeader
					onIngredientsUpdate={handleIngredientsUpdate}
					onNumLoavesUpdate={handleNumLoavesUpdate}
					ingredients={ingredients}
					numLoaves={numLoaves}
					recipeDefaults={recipeDefaults}
					recipeMetaData={recipeMetaData}
				/>
				<Ingredients ingredients={ingredients} />
				<TimeTrackers steps={stepsToTrack} />
				<UsefulInfo ingredients={ingredients} />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	...gs,
	bold: {
		fontWeight: 'bold',
	},
	card: {
		padding: 20,
		backgroundColor: gs.cardBackgroundColor,
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
	},
});
