import { StyleSheet, Text, View } from 'react-native';
import gs from '../../GlobalStyles.js';

export default function Method(props) {
	const methodSteps = props.method.map((step, index) => {
		return (
			<View style={styles.row}>
				<Text style={styles.bodyText}>{index + 1}. </Text>
				<Text style={styles.bodyText}>{step}</Text>
			</View>
		);
	});

	return (
		<View style={[styles.container, styles.section]}>
			<Text style={styles.sectionTitle}>Method</Text>
			{methodSteps}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
	},
	row: {
		marginBottom: 10,
		flexDirection: 'row',
	},
	...gs,
});
