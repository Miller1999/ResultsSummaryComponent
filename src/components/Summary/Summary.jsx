import { Fragment } from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import data from "../../data.json";
import Button from "../Button/Button";
import Circle from "../Circle/Circle";

const StyledSection = styled.section`
	background-color: white;
	display: flex;
	width: 40rem;
	height: 30rem;
	border-radius: 2rem;
	box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
	@media (max-width: 425px) {
		width: 100%;
		height: 100vh;
		flex-direction: column;
		box-shadow: none;
		border-radius: 0rem 0rem 2rem 2rem;
	}
`;
const LeftSection = styled(StyledSection)`
	width: 50%;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	padding: 2rem;
	text-align: center;
	background: rgb(120, 87, 255);
	background: linear-gradient(
		180deg,
		rgba(120, 87, 255, 1) 50%,
		rgba(46, 43, 233, 1) 100%
	);
	box-shadow: none;
	@media (max-width: 425px) {
		width: 100%;
		height: 50%;
		flex-direction: column;
		box-shadow: none;
		border-radius: 0rem 0rem 2rem 2rem;
	}
`;
const RightSection = styled(LeftSection)`
	background: white;
	align-items: normal;
	text-align: left;
	flex-direction: column;
	gap: 1.5rem;
`;
const LightP = styled.p`
	color: hsl(241, 100%, 89%);
	font-weight: 500;
	line-height: 1.25rem;
	font-size: 1.1rem;
`;

const Summary = () => {
	console.log(data);
	const scores = [];
	data.forEach((item) => scores.push(item.score));

	return (
		<Fragment>
			<StyledSection>
				<LeftSection>
					<h2>Your Result</h2>
					<Circle scores={scores} />
					<h3>Great</h3>
					<LightP>
						You scored higher than 65% of the people who have taken these test
					</LightP>
				</LeftSection>
				<RightSection>
					<h1>Summary</h1>
					{data.map((item) => {
						return (
							<Card
								key={item.category}
								icon={item.icon}
								color={item.color}
								category={item.category}
								score={item.score}
							/>
						);
					})}
					<Button>Continue</Button>
				</RightSection>
			</StyledSection>
		</Fragment>
	);
};

export default Summary;
