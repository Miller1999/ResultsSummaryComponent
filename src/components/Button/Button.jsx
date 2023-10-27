import styled from "styled-components";

const StyledButton = styled.button`
	height: 3rem;
	background-color: hsl(224, 30%, 27%);
	border-radius: 1rem;
	color: white;
	border: none;
	cursor: pointer;
	transition: background 0.7s linear;
	&:hover {
		background: rgb(120, 87, 255);
		background: linear-gradient(
			180deg,
			rgba(120, 87, 255, 1) 50%,
			rgba(46, 43, 233, 1) 100%
		);
	}
	@media (max-width: 425px) {
		padding: 1rem;
	}
`;

const Button = ({ children }) => {
	return <StyledButton>{children}</StyledButton>;
};

export default Button;
