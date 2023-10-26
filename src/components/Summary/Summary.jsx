import { Fragment } from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import data from "../../data.json";
const StyledSection = styled.section`
	background-color: white;
	display: flex;
	width: 40rem;
	height: 30rem;
	border-radius: 2rem;
`;
const LeftSection = styled(StyledSection)`
	width: 50%;
	background: rgb(120, 87, 255);
	background: linear-gradient(
		180deg,
		rgba(120, 87, 255, 1) 50%,
		rgba(46, 43, 233, 1) 100%
	);
`;
const RightSection = styled(LeftSection)`
	background: white;
	padding: 2rem;
	max-width: 20rem;
	flex-direction: column;
	gap: 1.5rem;
`;
const Summary = () => {
	return (
		<Fragment>
			<StyledSection>
				<LeftSection />
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
				</RightSection>
			</StyledSection>
		</Fragment>
	);
};

export default Summary;
