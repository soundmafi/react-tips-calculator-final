import styled from 'styled-components';

export const StyledForm = styled.form`
	display: grid;
	grid-template-rows: auto;
	grid-row-gap: 45px;

	margin: 0 auto;
	width: 459px;

	@media (max-width: 744px) {
		width: 332px;
	}
`;

export const StyledTitle = styled.h1`
	font-size: 40px;
	font-weight: 400;
	line-height: 58px;
	letter-spacing: -1px;
	text-align: center;
	color: #000000;

	@media (max-width: 744px) {
		font-size: 24px;
		line-height: 35px;
	}
`;

export const StyledSubtitle = styled.p`
	font-size: 32px;
	font-weight: 400;
	line-height: 37.5px;
	letter-spacing: -1px;
	text-align: center;
	color: #756c6c91;

	@media (max-width: 744px) {
		font-size: 24px;
		line-height: 28px;
	}
`;

export const StyledInputContainer = styled.div`
	display: grid;
	grid-template-rows: auto;
	grid-row-gap: 33px;

	width: 456px;
	margin: 0 auto;

	@media (max-width: 744px) {
		grid-row-gap: 17px;

		width: 321px;
	}
`;

export const StyledTotal = styled.p`
	font-size: 24px;
	font-weight: 500;
	line-height: 35px;
	letter-spacing: 0.5px;
	text-align: left;
	color: #000000;

	@media (max-width: 414px) {
		font-size: 18px;
		line-height: 26px;
		text-align: left;
	}
`;
