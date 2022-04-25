import { StyledButton } from './styles';

interface IButton {
	isDisabled: boolean;
}

const Button = ({ isDisabled }: IButton) => {
	return (
		<StyledButton type="submit" $isDisabled={!isDisabled}>
			Ohhhoooo 🍻
		</StyledButton>
	);
};

export default Button;
