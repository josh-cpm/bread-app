import { StyleSheet, Text, View, Alert, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import gs from '../GlobalStyles.js';
import { WhiteSmallButton } from './reusible/Buttons.js';
import { DateTime } from 'luxon';

export default function StepTracker(props) {
	const [startTime, setStartTime] = useState(null);
	const [countUp, setCountUp] = useState(null);

	function timerModal() {
		Alert.alert('Do you want to clear this timer?', '', [
			{ text: 'Yes', onPress: () => clearTimer() },
			{ text: 'No', style: 'cancel' },
		]);
	}

	function clearTimer() {
		setStartTime(null);
	}

	function startTimer() {
		const now = DateTime.now();
		setStartTime(now);
	}

	useEffect(() => {
		let interval = null;

		if (startTime) {
			interval = setInterval(() => {
				const now = DateTime.now();
				const timeDiff = now.diff(startTime, 'seconds');
				setCountUp(timeDiff.seconds);
			}, 10);
		} else {
			clearInterval(interval);
			setCountUp(null);
		}

		return () => clearInterval(interval);
	}, [startTime]);

	function styleCountUp(seconds) {
		if (seconds < 10) {
			return `00:0${Math.round(seconds)}`;
		}
		if (seconds < 60) {
			return `00:${Math.round(seconds)}`;
		}

		if (seconds < 600) {
			return `0${Math.round(seconds / 60)}:${Math.round(seconds % 60)}`;
		}

		if (seconds < 3600) {
			return `${Math.round(seconds / 60)}:${Math.round(seconds % 60)}`;
		}

		const hours = Math.floor(seconds / 3600);
		const minutes = Math.round((seconds % 3600) / 60);

		return `${hours}:${minutes}`;
	}

	function countComponent() {
		if (startTime) {
			// Show if the timer has been started
			return (
				<Pressable style={styles.row} onPress={timerModal}>
					<Text style={[styles.stepName]}>{props.stepName} </Text>
					<Text style={[styles.text, styles.marginRight]}>
						{styleCountUp(countUp)}
					</Text>
					<WhiteSmallButton
						onPress={timerModal}
						title={startTime.toFormat('t')}
					></WhiteSmallButton>
				</Pressable>
			);
		}

		// show if the timer has not been started
		return (
			<View style={styles.row}>
				<Text style={[styles.stepName, styles.marginRight]}>
					{props.stepName}
				</Text>
				<WhiteSmallButton
					title="Start"
					selected
					onPress={startTimer}
				></WhiteSmallButton>
			</View>
		);
	}
	return <View>{countComponent()}</View>;
}

const styles = StyleSheet.create({
	stepName: {
		...gs.bodyText,
		fontWeight: 'bold',
		marginVertical: 5,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10,
	},
	text: {
		...gs.bodyText,
		marginVertical: 5,
	},
	marginLeft: {
		marginLeft: 10,
	},
	marginRight: {
		marginRight: 10,
	},
});
