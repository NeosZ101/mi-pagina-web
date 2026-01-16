import React, { useState } from 'react';
import * as S from './styles';
import { filterAllowedValuesForName } from '../../utils/filterAllowedValuesForName';
import { FORM_STRINGS, MIN_LENGTH, MAX_LENGTH } from './constants';

function NameForm({ onUpdateName }) {
  const [userInput, setUserInput] = useState("");
  const handleUpdate = (e) => {
    e.preventDefault();
    if (filterAllowedValuesForName(userInput)){
      onUpdateName(userInput.trim());
      setUserInput("")
    } else {
      alert(`Invalid name. Remember: The minimum ${MIN_LENGTH} Characters, only letters and spaces and the apostrophe (') is only valid in the o'h format.`);
    }
  };

  return (
    <S.Main>
      <h3>{FORM_STRINGS.TITLE}</h3>
      <form onSubmit={handleUpdate}> 
        <S.Input
          type='text'
          placeholder={FORM_STRINGS.PLACEHOLDER}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          required={true}
          minLength={MIN_LENGTH}
          maxLength={MAX_LENGTH}
        />
        <S.Button type="submit">
          {FORM_STRINGS.BUTTON_TEXT}
        </S.Button>
      </form>
    </S.Main>
  );
}

export default NameForm;