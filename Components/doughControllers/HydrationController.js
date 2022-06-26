import HorizontalSelectionList from '../reusible/HorizontalSelectionList';
import { cleanListItems, round } from '../../modules/utilities';

export default function HydrationController(props) {
	const currentHydration = round(props.doughHydration, 2);
	const list = props.defaultDoughHydrationList;

	return (
		<HorizontalSelectionList
			listTitle="Hydration"
			listItems={cleanListItems(list, currentHydration)}
			selectedValue={currentHydration}
			percent
			onItemPress={(hydration) => props.handleHydrationPress(hydration)}
		/>
	);
}
