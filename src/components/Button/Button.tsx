import styled from 'styled-components';

const Button = styled.button`
	background: ${({ theme }) => theme.primary};
	border: none;
	color: #fff;
	padding: 5px 20px;
	border-radius: 4px;
	font-size: 1.8rem;
	transition: background 0.2s ease-in-out;
	cursor: pointer;
	&:hover {
		background: ${({ theme }) => theme.primaryHover};
	}
	&:disabled {
		background: ${({ theme }) => theme.primaryDisabled};
		cursor: default;
	}
`;

export default Button;
