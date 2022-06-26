import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import gs from './GlobalStyles.js';

import RecipeCard from './Components/RecipeCard';
import Spacer from './Components/reusible/Spacer.js';

export default function App() {
	return (
		<View style={styles.outerContainer}>
			<StatusBar style="light" translucent="true" />
			<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
				<SafeAreaView />
				<Spacer style={{ height: 40 }} />
				<RecipeCard />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	outerContainer: {
		backgroundColor: gs.cardBackgroundColor,
		flex: 1,
	},
});
