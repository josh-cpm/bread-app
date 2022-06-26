import { StyleSheet, View, Text } from 'react-native';
import gs from '../../GlobalStyles.js';
import {
	sumIngByType,
	calcEndHydration,
} from '../../modules/breadFunctions.js';
import { round } from '../../modules/utilities.js';

export default function UsefulInfo(props) {
	const totalWater = sumIngByType(props.ingredients, 'liquid');
	const totalFlour = sumIngByType(props.ingredients, 'flour');
	const endHydration =
		round(calcEndHydration(props.ingredients) * 100, 0) + '%';

	return (
		<View>
			<Text style={styles.sectionTitle}>Useful Info</Text>
			<Text style={styles.bodyText}>Hydration with levain: {endHydration}</Text>
			<Text style={styles.bodyText}>
				{`(`}
				<Text style={[styles.bodyText, styles.italic]}>
					Assumes 100% hydration levain
				</Text>
				{`)`}
			</Text>
			<Text style={styles.bodyText}>
				3/4 total water: {round(totalWater * 0.75, 0)}g
			</Text>
			<Text style={styles.bodyText}>
				75% hydration: {round(totalFlour * 0.75, 0)}g water
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	...gs,
	container: {
		marginTop: 20,
	},
	trackerList: {
		flexDirection: 'column',
	},
	italic: {
		fontStyle: 'italic',
	},
});
