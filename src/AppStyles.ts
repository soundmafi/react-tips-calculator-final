import styled from 'styled-components';
import circleBackground from './assets/backgroundCircles.svg';

export const StyledApp = styled.div`
	max-width: 1512px;
	width: 100%;
	min-height: calc(100vh - 335px);
	padding-top: 200px;
	padding-bottom: 135px;
	margin: 0px auto;

	background-image: url(${circleBackground});
	background-repeat: no-repeat;
	background-position-x: -100px;
	background-position-y: -100px;
	background-color: #eaf2f2;

	@media (max-width: 744px) {
		min-height: calc(100vh - 550px);
		padding-top: 235px;
		padding-bottom: 315px;

		background-position-x: -90px;
		background-position-y: -110px;
	}
`;
