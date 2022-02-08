import { useState, useEffect } from "react";
import axios from 'axios';
import CharacterItem from "../CharacterItem/CharacterItem";

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCharacters = async () => {
            setLoading(true);
            const res = await axios.get('https://www.breakingbadapi.com/api/characters?limit=32');
            const data = res.data;
            console.log(data);
            setLoading(false);
            setCharacters(data);
        }

        fetchCharacters();
    }, []);

    return loading ? <h1 className="text-2xl">Loading...</h1> : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto justify-center text-center gap-6 px-20 py-4">
            {characters.map(character => (
                <CharacterItem key={character.char_id} chars={character}></CharacterItem>
            ))}
        </div>
    )


}

export default CharacterList;
