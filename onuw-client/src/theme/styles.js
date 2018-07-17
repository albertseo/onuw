import styled, { injectGlobal } from "styled-components";

// Styled-Components for general components
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

// Style for Main Wrapper div
const MainWrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;

  @media (min-width: 500px) {
    width: 500px;
  }
  justify-content: center;
  flex-direction: column;
`;

// Inject Directly into stylesheet for Raleway font
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Raleway');

  * {
    margin-bottom: 0px;
    margin-top: 0px;
  }

  body {
    padding: 0px;
    margin: 0px;
    background-color: #181E24;
    font-family: Raleway, sans-serif;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
`;

export { 
  CenterComponentWrapper,
  Title,
  Line, 
  PlayerCardWrapper,
  PlayerCard,
  MainWrapper
};