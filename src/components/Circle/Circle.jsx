import styled from "styled-components";

const CircleDiv = styled.div`
	border-radius: 100%;
	width: 12rem;
	height: 12rem;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	background: rgb(78, 33, 202);
	background: linear-gradient(
		180deg,
		rgba(78, 33, 202, 1) 50%,
		rgba(36, 33, 202, 0) 100%
	);
	@media (max-width: 425px) {
		width: 8rem;
		height: 8rem;
	}
`;
const VerticalSpan = styled.span`
	color: white;
`;
const Circle = ({ scores }) => {
	const mean = (scores) => {
		const result = Math.trunc(
			scores.reduce((acc, sum) => (acc += sum)) / scores.length
		);
		return result;
	};
	return (
		<CircleDiv>
			<VerticalSpan>
				<h4>{mean(scores)}</h4>of 100
			</VerticalSpan>
		</CircleDiv>
	);
};

export default Circle;
