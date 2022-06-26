import { StyleSheet, Text, View } from 'react-native';
import gs from '../../GlobalStyles.js';
import { round } from '../../modules/utilities.js';

function formatQuantity(quantity) {
	if (quantity < 20) {
		return round(quantity, 1);
	} else {
		return round(quantity, 0);
	}
}

export default function Ingredients(props) {
	const ingredientsList = props.ingredients.map((ingredient, index) => {
		return (
			<View key={index}>
				<Text style={styles.bodyText}>
					<Text style={styles.bold}>
						{formatQuantity(ingredient.quantity, ingredient?.digits)}g
					</Text>{' '}
					- {ingredient.name}
				</Text>
			</View>
		);
	});
	return (
		<View style={styles.section}>
			<Text style={styles.sectionTitle}>Ingredients</Text>
			{ingredientsList}
		</View>
	);
}

const styles = StyleSheet.create({
	bold: {
		fontWeight: 'bold',
	},
	...gs,
});
