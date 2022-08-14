import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { recipesList } from '../Data/recipe';
import RecipeListRow from './RecipeListRow';
import gs from '../GlobalStyles.js';

export default function RecipesList(props) {
	const recipes = recipesList;

	const list = recipes.map((recipe) => {
		return <RecipeListRow recipe={recipe}></RecipeListRow>;
	});

	return (
		<ScrollView>
			<View styles={styles.titleContainer}>
				<Text style={styles.title}>Recipes</Text>
			</View>
			{list}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	title: {
		alignSelf: 'center',
		...gs.title,
	},
});
