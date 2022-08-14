import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import gs from './GlobalStyles.js';
import RecipesList from './Components/RecipesList.js';

export default function App() {
	return (
		<View style={styles.outerContainer}>
			<StatusBar style="light" translucent="true" />
			<SafeAreaView />
			<RecipesList />
		</View>
	);
}

const styles = StyleSheet.create({
	outerContainer: {
		backgroundColor: gs.cardBackgroundColor,
		flex: 1,
	},
});
