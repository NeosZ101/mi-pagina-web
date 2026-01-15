import React, { useState } from 'react';
import styled from "styled-components";
import { validateName } from './utils/validateName';
import { MIN_LENGTH, MAX_LENGTH } from './constants/validators';

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

const Main = styled.main`
  padding: 40px;
  background-color: white;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 15px 30px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
`;

function App() {
  const [name, setName] = useState("User");
  const [userInput, setUserInput] = useState("");
  const handleUpdate = (e) => {
    e.preventDefault();
    if (validateName(userInput)){
      setName(userInput.trim());
      setUserInput("")
    } else {
      alert(`Invalid name. Remember: The minimum ${MIN_LENGTH} Characters, only letters and spaces and the apostrophe (') is only valid in the o'h format.`);
    }
  };

  return (
    <Page> 
      <Header>
        <p style={{ fontSize: '1.5rem', margin: 0 }}>Welcome {name}</p>
      </Header>
      <Main>
        <h3>Profile Settings</h3>
        <form onSubmit={handleUpdate}> 
          <Input
            type='text'
            placeholder='Type a name...'
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            required={true}
            minLength={MIN_LENGTH}
            maxLength={MAX_LENGTH}
          />
          <Button type="submit">
            UPDATE NAME
          </Button>
        </form>
      </Main>
    </Page>
  );
}

export default App;