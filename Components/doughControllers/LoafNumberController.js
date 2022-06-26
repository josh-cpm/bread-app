import HorizontalSelectionList from '../reusible/HorizontalSelectionList';
import { cleanListItems } from '../../modules/utilities';

export default function LoafNumberController(props) {
	return (
		<HorizontalSelectionList
			selectedValue={props.numLoaves}
			listTitle="Loaves"
			listItems={cleanListItems(props.loafNumberList, props.numLoaves)}
			onItemPress={(newLoafNumber) => props.onLoafNumPress(newLoafNumber)}
		/>
	);
}
