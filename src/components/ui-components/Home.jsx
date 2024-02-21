import React from "react";
import styled from "styled-components";
import StyledPanel from "./StyledPanel";

const HomeContainer = styled.div`
  justify-content: space-between;
`;

const WelcomeSection = styled.div`
  flex: 1;
  max-width: 600px;
  margin: 10px auto;
`;

const Heading = styled.h1`
  font-size: 28px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 30px;
  color: #555;
`;

const FeatureSection = styled.section`
  margin-bottom: 40px;
`;

const FeatureTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

const FeatureItem = styled.li`
  max-width: 200px;
  text-align: center;
`;

const Home = () => {
  const featuredItems = [
    "Responsive Components",
    "Customizable Styles",
    "Previewable Components",
  ];
  return (
    <HomeContainer>
      <WelcomeSection>
        <Heading>Welcome to UI Storybook</Heading>
        <Description>
          Explore the features and components that are periodically added!
        </Description>
      </WelcomeSection>

      {/* Feature Section */}
      <FeatureSection>
        <FeatureTitle>Key Features</FeatureTitle>
        <FeatureList>
          {featuredItems.map((item, index) => (
            <div style={{ margin: "0 20px" }}>
              <StyledPanel theme="primary" key={index}>
                <FeatureItem>{item}</FeatureItem>
              </StyledPanel>
            </div>
          ))}
        </FeatureList>
      </FeatureSection>
    </HomeContainer>
  );
};

export default Home;
