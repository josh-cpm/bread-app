const defaults = {
	color: '#CBD5E1',
	backgroundColor: `#000`,
	cardBackgroundColor: `#334155`,
	whiteOpacity50: 'rgba(255, 255, 255, .5)',
};

const styles = {
	bodyText: {
		fontSize: 20,
		marginBottom: 5,
		color: defaults.color,
		lineHeight: 25,
	},
	title: {
		fontSize: 40,
		fontWeight: 'bold',
		marginBottom: 10,
		color: defaults.color,
	},
	sectionTitle: {
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 10,
		color: defaults.color,
	},
	section: {
		marginBottom: 20,
	},
	...defaults,
};

export default styles;
