import Input from './../Input/Input';
import CustomSelect from './../CustomSelect/CustomSelect';
import Button from './../Button/Button';
import { useState, useEffect } from 'react';
import { ITip, IOption } from '../../types/types';
import { ChangeEvent, FormEvent } from 'react';
import {
	StyledForm,
	StyledTitle,
	StyledSubtitle,
	StyledInputContainer,
	StyledTotal,
} from './styles';

const Form = () => {
	const [tips, setTips] = useState<ITip>({
		bill: '',
		persons: '',
		tipRate: 0.1,
		total: 0,
	});

	const { bill, persons, tipRate, total } = tips;

	const handleInput = ({ target }: ChangeEvent<HTMLInputElement>): void => {
		setTips({ ...tips, [target.name]: +target.value });
	};

	const handleSelect = (option: IOption | null): void => {
		if (option) {
			setTips({ ...tips, tipRate: option.value });
		}
	};

	const handleClick = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setTips({
			...tips,
			total: ((1 + tipRate) * +bill) / +persons,
		});
	};

	const [isDisabled, setIsDisables] = useState<boolean>(false);

	useEffect(() => {
		setIsDisables(!!(+bill && +persons));
	}, [bill, persons]);

	return (
		<StyledForm onSubmit={handleClick}>
			<StyledTitle>Welcome to App</StyledTitle>
			<StyledSubtitle>Let’s go calculate your tips</StyledSubtitle>
			<StyledInputContainer>
				<Input inputType={'bill'} handleInput={handleInput} value={bill} />
				<Input inputType={'persons'} handleInput={handleInput} value={persons} />
				<CustomSelect handleSelect={handleSelect} value={tipRate} name ='Tips Rate'/>
			</StyledInputContainer>
			<StyledTotal>Total: {total.toFixed(2)}$</StyledTotal>
			<Button isDisabled={isDisabled} />
		</StyledForm>
	);
};

export default Form;
