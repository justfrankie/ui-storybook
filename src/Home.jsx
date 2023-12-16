// Home.js
import React from 'react'
import styled from 'styled-components'

const HomeContainer = styled.div`
  justify-content: space-between;
`

const WelcomeSection = styled.div`
  flex: 1;
  max-width: 600px;
`

const Heading = styled.h1`
  font-size: 28px;
`

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 30px;
  color: #555;
`

const FeatureSection = styled.section`
  margin-bottom: 40px;
`

const FeatureTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
`

const FeatureItem = styled.li`
  max-width: 200px;
  text-align: center;
`

const ComponentShowcase = styled.section`
  text-align: center;
`

const ComponentTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`

const ComponentContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const ComponentBox = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
`

const Home = () => {
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
          <FeatureItem>Responsive Components</FeatureItem>
          <FeatureItem>Customizable Styles</FeatureItem>
          <FeatureItem>Previewable Components</FeatureItem>
        </FeatureList>
      </FeatureSection>

      {/* Component Showcase */}
      <ComponentShowcase>
        <ComponentTitle>Featured Component Showcase</ComponentTitle>
        <ComponentContainer>
          <ComponentBox>Component 1</ComponentBox>
          <ComponentBox>Component 2</ComponentBox>
          <ComponentBox>Component 3</ComponentBox>
        </ComponentContainer>
      </ComponentShowcase>
    </HomeContainer>
  )
}

export default Home
