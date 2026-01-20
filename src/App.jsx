import React, { useState } from 'react';
import styled from "styled-components";
import NameForm from './components/form/main';
import {GlobalStyle} from './styles/GlobalStyles';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: sans-serif;
  background-color: #f4f4f4;
  min-height: 100vh;
  box-sizing: border-box;
`;

const Header = styled.header`
  background-color: #DC143C;
  padding: 20px;
  color: white;
  text-align: center;
  border-radius: 10px;
  border: 2px solid black;
  max-width: 500px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
`;
const WelcomeText = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;


function App() {
  const [name, setName] = useState("User");

  return (
    <>
      <GlobalStyle />
      <Page> 
        <Header>
          <WelcomeText>Welcome {name}</WelcomeText>
        </Header>
        <NameForm onUpdateName={(newName) => setName(newName)} />
      </Page>
    </>
  );
}

export default App;