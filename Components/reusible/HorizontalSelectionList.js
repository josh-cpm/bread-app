import { Text, ScrollView, View, StyleSheet, Alert } from 'react-native';
import gs from '../../GlobalStyles';
import { WhiteSmallButton } from './Buttons';
import { decimalToPct } from '../../modules/utilities';

export default function HorizontalSelectionList(props) {
	function itemIsSelected(title) {
		const t = parseFloat(title);
		const v = parseFloat(props.selectedValue);

		if (t == v) {
			return true;
		}
		return false;
	}

	function handlePress(title) {
		try {
			props.onItemPress(title);
		} catch (e) {
			console.log(e);
		}
	}

	function formatButton(value) {
		let formattedValue = value;
		if (props?.percent) {
			formattedValue = decimalToPct(value);
		}
		return formattedValue;
	}

	function handleEditPress(listTitle) {
		Alert.prompt(
			'Enter new amount',
			configureAlertSubtitle(listTitle),
			(input) => cleanUserInput(input)
		);
	}

	function configureAlertSubtitle(listTitle) {
		if (listTitle == 'Hydration' || listTitle === 'Levain') {
			return 'Please enter a decimal.';
		} else return 'Please enter a whole number.';
	}

	function cleanUserInput(input) {
		const i = parseFloat(input);
		if (isNaN(i)) {
			Alert.alert('Please enter a number and try again.');
		} else {
			handlePress(i);
		}
	}

	return (
		<ScrollView contentContainerStyle={styles.contentContainer} horizontal>
			<Text style={styles.text}>{props.listTitle}: </Text>
			{props.listItems.map((item) => (
				<View key={item} style={styles.listItems}>
					<WhiteSmallButton
						selected={itemIsSelected(item)}
						title={formatButton(item)}
						onPress={() => handlePress(item)}
					></WhiteSmallButton>
				</View>
			))}
			<View style={styles.listItems}>
				<WhiteSmallButton
					title="edit"
					onPress={() => handleEditPress(props.listTitle)}
				></WhiteSmallButton>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: 10,
		paddingTop: 10,
	},
	text: {
		...gs.bodyText,
		fontWeight: 'bold',
	},
	listItems: {
		marginLeft: 5,
	},
});
