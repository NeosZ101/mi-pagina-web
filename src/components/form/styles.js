import styled from "styled-components";

export const Main = styled.main`
  padding: 40px;
  background-color: white;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
`;

export const Input = styled.input`
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  padding: 15px 30px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
`;

export const Title = styled.h3`
  margin-bottom:20px;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;