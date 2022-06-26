import { StyleSheet, Text, View } from 'react-native';
import gs from '../../GlobalStyles.js';
import StepTracker from '../StepTracker.js';

export default function TimeTrackers(props) {
	return (
		<View style={[styles.container, styles.section]}>
			<Text style={styles.sectionTitle}>Bake Tracker</Text>
			<View style={styles.trackerList}>
				{props.steps.map((step, index) => {
					return <StepTracker key={index} stepName={step} />;
				})}
			</View>
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
});
