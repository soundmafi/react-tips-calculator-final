import Select, { StylesConfig } from 'react-select';
import { IOption } from '../../types/types';
interface ISelect {
	handleSelect: (option: IOption | null) => void;
	value: number;
	name: string;
}

const CustomSelect = ({ handleSelect, value, name }: ISelect) => {
	const options: IOption[] = [
		{ value: 0.1, label: '10%' },
		{ value: 0.15, label: '15%' },
		{ value: 0.2, label: '20%' },
	];

	const customStyles: StylesConfig<IOption> = {
		control: (nativeStyles) => ({
			...nativeStyles,
			padding: 16,
			border: 'none',
			backgroundColor: '#ffffff',
			borderRadius: 30,
		}),

		indicatorSeparator: (nativeStyles) => ({
			...nativeStyles,
			display: 'none',
		}),

		indicatorsContainer: (nativeStyles) => ({
			...nativeStyles,
			marginRight: 20,
		}),

		singleValue: (nativeStyles) => ({
			...nativeStyles,
			fontSize: 18,
			letterSpacing: -0.3,
			color: '#756c6c',
			paddingLeft: 40,
			textAlign: 'center',
		}),
	};

	return (
		<Select
			styles={customStyles}
			options={options}
			defaultValue={options[0]}
			value={options.find((option) => option.value === value)}
			onChange={handleSelect}
			isMulti={false}
			name={name}
		/>
	);
};

export default CustomSelect;
