import { createContext, useReducer } from "react";
import axios from 'axios';
import characterReducer from './CharacterReducer';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
    const initialState = {
        characters: [],
        loading: false,
        character: {}
    }

    const [state, dispatch] = useReducer(characterReducer, initialState);

    const fetchCharacters = async () => {
        setLoading();
        const res = await axios.get('https://www.breakingbadapi.com/api/characters?limit=32');
        const data = res.data;

        dispatch({
            type: 'GET_CHARACTERS',
            payload: data,
        })
    }

    const fetchCharacter = async (char_id) => {
        setLoading();
        const res = await axios.get(`https://www.breakingbadapi.com/api/characters/${char_id}`);
        const [data] = res.data;
        console.log(data);
        dispatch({
            type: 'GET_CHARACTER',
            payload: data,
        })
    }

    const setLoading = () => dispatch({ type: 'SET_LOADING' })

    return <CharacterContext.Provider value={{
        characters: state.characters,
        character: state.character,
        loading: state.loading,
        fetchCharacters,
        fetchCharacter,
    }}>
        {children}
    </CharacterContext.Provider>
}

export default CharacterContext;
