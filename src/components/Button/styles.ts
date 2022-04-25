import styled from 'styled-components';

export const StyledButton = styled.button<{
	$isDisabled: boolean;
  }>`
	padding: 13px 80px;

	font-size: 24px;
	font-weight: 400;
	line-height: 35px;
	color: #ffffff;
	text-align: center;

	background-color: #2ed2c9;
	opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
	cursor: ${({ $isDisabled }) => ($isDisabled ? "default" : "pointer")};

	&:hover {
		background-color:${({ $isDisabled }) => ($isDisabled ? '#2ed2c9' : '#2cb3ac')} ;
	}

	&:active {
		background-color:${({ $isDisabled }) => ($isDisabled ? '#2ed2c9' : '#2d7a77')} ;
	}
`;
