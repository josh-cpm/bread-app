import { Text, StyleSheet, View, Pressable } from 'react-native';
import { useState } from 'react';
import gs from '../GlobalStyles.js';
import RecipeCard from './RecipeCard';

export default function RecipeListRow(props) {
	const [recipeModal, setRecipeModal] = useState(false);

	const handleClick = () => {
		console.log('CLICK');
		setRecipeModal(true);
		console.log(recipeModal);
	};

	let recipeOverlay;
	if (recipeModal) {
		recipeOverlay = <RecipeCard></RecipeCard>;
	}

	const handleExitRecipe = () => {
		setRecipeModal(false);
	};

	return (
		<Pressable onPress={handleClick}>
			{recipeModal && <RecipeCard exitRecipe={handleExitRecipe}></RecipeCard>}
			<Text style={styles.sectionTitle}>
				{props.recipe.recipeMetaData.title}
			</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	sectionTitle: gs.sectionTitle,
	overlayContainer: {
		position: 'absolute',
		left: 0,
		top: 0,
	},
});
