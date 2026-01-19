import { ALLOWED_LETTERS, MIN_LENGTH, MAX_LENGTH } from "../components/form/constants";

export const filterAllowedValuesForName = (nameValue) => {
    if (!nameValue)
        return false;
    const text = nameValue.trim().toLowerCase();
    if (text.length < MIN_LENGTH || text.length > MAX_LENGTH)
        return false;
    if (text.includes("'") && !text.includes("o'higgins")){
        return false;
    }
    const hasInvalidChar = text.split('').some(char=> {
        if (char === "'")
            return false
            return !ALLOWED_LETTERS.includes(char);
    });
    return !hasInvalidChar;
};