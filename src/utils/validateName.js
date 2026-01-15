import { ALLOWED_LETTERS, MIN_LENGTH, MAX_LENGTH } from '../constants/validators';

export const validateName = (nameValue) => {
    if (!nameValue) 
        return false;
    const text = nameValue.trim().toLowerCase();
    if (text.length < MIN_LENGTH || text.length > MAX_LENGTH) 
        return false;
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === "'") {
                if (!text.includes("o'higgins")) return false;
        } else if (!ALLOWED_LETTERS.includes(char)) {
            return false;
        }
    }
    return true;
};

