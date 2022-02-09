import { createContext, useReducer } from "react";
import axios from 'axios';
import characterReducer from './CharacterReducer';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
    const initialState = {
        characters: [],
        loading: false,
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

    const setLoading = () => dispatch({ type: 'SET_LOADING' })

    return <CharacterContext.Provider value={{
        characters: state.characters,
        loading: state.loading,
        fetchCharacters,
    }}>
        {children}
    </CharacterContext.Provider>
}

export default CharacterContext;
