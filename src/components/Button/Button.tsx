import styled, { css } from 'styled-components';

type ButtonProps = {
	primary?: boolean;
	secondary?: boolean;
	primaryNoBg?: boolean;
	secondaryNoBg?: boolean;
};

const Button = styled.button<ButtonProps>`
	border: none;
	color: #fff;
	padding: 5px 20px;
	border-radius: 4px;
	font-size: 1.8rem;
	transition-property: color, border-color, background;
	transition-duration: .2s;
	transition-timing-function: ease-in-out;
	cursor: pointer;
	background: ${({ theme }) => theme.primary};
	&:hover {
		background: ${({ theme }) => theme.primaryHover};
	}
	&:disabled {
		background: ${({ theme }) => theme.primaryDisabled};
		cursor: default;
	}

	${({ secondary }) =>
		secondary &&
		css`
			background: ${({ theme }) => theme.secondary};
			&:hover {
				background: ${({ theme }) => theme.secondaryHover};
			}
			&:disabled {
				background: ${({ theme }) => theme.secondaryDisabled};
				cursor: default;
			}
		`}

	${({ primaryNoBg }) =>
		primaryNoBg &&
		css`
			background: #fff;
			color: ${({ theme }) => theme.primary};
			border: 1px solid ${({ theme }) => theme.primary};
			&:hover {
				color: ${({ theme }) => theme.primaryHover};
				border-color: ${({ theme }) => theme.primaryHover};
				background: #fff;
			}
			&:disabled {
				color: ${({ theme }) => theme.primaryDisabled};
				border-color: ${({ theme }) => theme.primaryDisabled};
				background: #fff;
				cursor: default;
			}
		`}
	${({ secondaryNoBg }) =>
		secondaryNoBg &&
		css`
			background: #fff;
			color: ${({ theme }) => theme.secondary};
			border: 1px solid ${({ theme }) => theme.secondary};
			&:hover {
				color: ${({ theme }) => theme.secondaryHover};
				border-color: ${({ theme }) => theme.secondaryHover};
				background: #fff;
			}
			&:disabled {
				color: ${({ theme }) => theme.secondaryDisabled};
				border-color: ${({ theme }) => theme.secondaryDisabled};
				cursor: default;
				background: #fff;
			}
		`}
`;

export default Button;
