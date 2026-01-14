import React, { useState } from 'react';
import styled from "styled-components";

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
  const changeName = () => {
    const allowedLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZáéíóúÁÉÍÓÚñÑ ";
    let Valid = true;
    const text = userInput.trim();
    if (text === "") {
      alert("Please enter a name.");
      return;
    }
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (!isNaN(char) && char !== ' ') {
        Valid = false;
        break;
      }
      if (char === "'") {
        if (text.toLowerCase() !== "o'higgins") {
          Valid = false;
        break;
        }
      } else if (!allowedLetters.includes(char)) {
        Valid = false;
        break;
      }
    }
    if (Valid) {
      setName(text);
      setUserInput("");
    } else {
      alert("Invalid Name: Only letters allowed. Apostrophe only permitted for Bernardo O'Higgins.");
    }
  };

  return (
    <Page> 
      <Header>
        <p style={{ fontSize: '1.5rem', margin: 0 }}>Welcome {name}</p>
      </Header>
      <Main>
        <h3>Profile Settings</h3>
        <Input
          type='text'
          placeholder='Type a name...'
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Button onClick={changeName}>
          UPDATE NAME
        </Button>
      </Main>
    </Page>
  );
}

export default App;
a 