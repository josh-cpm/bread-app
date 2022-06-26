import gs from '../../GlobalStyles';
import { Text, StyleSheet, Pressable, View } from 'react-native';
import { useState } from 'react';

export function WhiteSmallButton(props) {
	const [pressState, setPressState] = useState(false);

	function chooseStyle() {
		if (pressState) {
			return 'pressed';
		}

		if (props.selected) {
			return 'selected';
		}

		return 'default';
	}

	function onPressIn() {
		setPressState(true);
	}

	function onPressOut() {
		setPressState(false);
	}

	return (
		<Pressable
			onPressIn={onPressIn}
			onPressOut={onPressOut}
			onPress={props.onPress}
			style={[styles.buttonWrapper, styles[chooseStyle()].wrapper]}
		>
			<Text style={styles[chooseStyle()].text}>{props.title.toString()}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	buttonWrapper: {
		borderWidth: 1,
		borderRadius: 15,
		paddingTop: 5,
		paddingRight: 10,
		paddingLeft: 10,
		minWidth: 40,
	},
	default: {
		wrapper: {
			borderColor: 'white',
		},
		text: {
			...gs.bodyText,
			textAlign: 'center',
		},
	},
	pressed: {
		wrapper: {
			borderColor: 'white',
			backgroundColor: gs.whiteOpacity50,
		},
		text: {
			...gs.bodyText,
			textAlign: 'center',
		},
	},
	selected: {
		wrapper: {
			backgroundColor: 'white',
		},
		text: {
			...gs.bodyText,
			color: gs.cardBackgroundColor,
			textAlign: 'center',
		},
	},
});
