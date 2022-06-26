import HorizontalSelectionList from '../reusible/HorizontalSelectionList';
import { cleanListItems } from '../../modules/utilities';

export default function LevainController(props) {
	return (
		<HorizontalSelectionList
			listTitle="Levain"
			listItems={cleanListItems(props.defaultLevainPctList, props.levainPct)}
			selectedValue={props.levainPct}
			percent
			onItemPress={(levainPct) => props.onLevainPctPress(levainPct)}
		/>
	);
}
