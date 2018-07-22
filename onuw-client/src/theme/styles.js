import styled, { injectGlobal } from "styled-components";

// Styled-Components for all general components
const CenterComponentWrapper = styled.div`
  justify-content: center;
  margin-top: 1em;
`;

const Title = styled.p`
  font-size: 1.4em;
  color: #e5e5e5;
  text-align: left;
`;

const Line = styled.hr`
  color: #f7f7f7;
  background-color: #f7f7f7;
  height: 2px;
`;

const PlayerCardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const PlayerCard = styled.div`
  width: 45%;
  color: #f7f7f7;
  border-radius: 2px;
  display: flex;
  margin-top: 10px;

  &:hover {
    background-color: gray;
  }
`;

const Link = styled.a`
  color: #f7f7f7;
`;

// Styles for Header component
// FOR: components/header.js
const GameTitle = styled.p`
  font-size: 2.25em;
  color: #e5e5e5;
  text-align: center;
  margin-bottom: 0px;
  margin-top: 20px;
`;

const HeaderWrapper = styled.div`
  margin-botton: 5px;
`;

const TimeOfDay = styled.p`
  font-size: 1.75em;
  color: #e5e5e5;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 0px;
`;

// Stlyes for Footer Component
// FOR: components/footer.js
const FooterWrapper = styled.div`
  margin-top: 30px;
  text-align: center;
  color: #f7f7f7;
  font-size: 0.6em;
`;

// Styles for lobby.js
// FOR: components/lobby.js
const StartButton = styled.button`
  background-color: #181E24;
  color: #f7f7f7
  border: 2px solid #f7f7f7;
  border-radius: 2px;
  font-size: 1.25em;
  margin-top: 1em;
  cursor: pointer;
`;

const StartButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

// Styles for Intro component
// FOR: components/intro.js
const NameTextInput = styled.input`
  color: #C4C4C4;
  background-color: #181E24;
  border-radius: 2px;
  border: 2px solid #F7F7F7;
  padding: 2px 0px 2px 10px;
  font-size: 1.2em;
  margin-right: 20px;
`;

const NameTextButton = styled.button`
  background-color: #F7F7F7;
  border: 2px solid #F7F7F7;
  border-radius: 2px;
  font-size: 1.2em;
`;

const NameTextWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SpacerDiv = styled.div`
  height:  2em;
`;
// Style for Main Wrapper div
// FOR: main view components, ie. Lobby, Intro
const MainWrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  height: 100%:
  width: 100%;

  @media (min-width: 500px) {
    width: 500px;
  }

  display: flex;
  flex-direction: column;
`;

// Inject Directly into stylesheet for Raleway font
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Raleway');

  * {
    margin-bottom: 0px;
    margin-top: 0px;
  }

  html, body {
    padding: 0px;
    margin: 0px;
    height: 100%;
    width: 100%;
    background-color: #181E24;
    font-family: Raleway, sans-serif;
  }

  #root {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }

`;

export {
  CenterComponentWrapper,
  GameTitle,
  Title,
  Line,
  PlayerCardWrapper,
  PlayerCard,
  Link,
  FooterWrapper,
  StartButton,
  StartButtonWrapper,
  HeaderWrapper,
  TimeOfDay,
  NameTextInput,
  NameTextButton,
  NameTextWrapper,
  SpacerDiv,
  MainWrapper
};
