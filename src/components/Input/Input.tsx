import { StyledInput } from './styles';
import { ChangeEvent } from 'react';

interface IInput {
	inputType: string;
	value: number|string;
	handleInput: (event: ChangeEvent<HTMLInputElement>) =>void;
}

const Input = ({ inputType, value, handleInput }: IInput) => {
	return (
		<label htmlFor={inputType}>
			<StyledInput
				aria-label={`Enter ${inputType}`}
				placeholder={`Enter ${inputType}`}
				type="number"
				onChange={handleInput}
				name={inputType}
				value={value}
				min = '1'
			/>
		</label>
	);
};

export default Input;
