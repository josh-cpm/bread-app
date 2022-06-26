import HorizontalSelectionList from '../reusible/HorizontalSelectionList';
import { cleanListItems } from '../../modules/utilities';

export default function DoughMassController(props) {
	return (
		<HorizontalSelectionList
			listTitle="Dough mass"
			listItems={cleanListItems(
				props.doughMassList,
				Math.round(props.doughMass)
			)}
			selectedValue={Math.round(props.doughMass)}
			onItemPress={props.handleDoughMassPress}
		/>
	);
}
