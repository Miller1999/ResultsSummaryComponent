import styled from "styled-components";

const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
	height: 3rem;
	background-color: ${(props) => (props.color ? props.color : "black")};
	border-radius: 1rem;
	& img {
		width: 1.25rem;
	}
`;
const InnerDiv = styled(StyledDiv)`
	width: 50%;
	background-color: transparent;
	justify-content: start;
	gap: 1rem;
	& p {
		color: ${(props) => (props.color ? props.color : "black")};
	}
`;
const Card = ({ icon, color, category, score }) => {
	const modifiedColors = color.replace(")", ", 0.1)");

	return (
		<StyledDiv color={modifiedColors}>
			<InnerDiv color={color}>
				<img src={icon} />
				<p>{category}</p>
			</InnerDiv>

			<span>
				<strong>{score} </strong>/100
			</span>
		</StyledDiv>
	);
};

export default Card;
