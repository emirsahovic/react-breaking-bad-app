import { useEffect, useContext } from "react";
import CharacterItem from "../CharacterItem/CharacterItem";
import CharacterContext from "../../context/CharacterContext";
import Spinner from "../Spinner/Spinner";

const CharacterList = () => {
    const { characters, loading, fetchCharacters } = useContext(CharacterContext);

    useEffect(() => {
        fetchCharacters();
    }, []);

    return loading ? <Spinner /> : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto justify-center text-center gap-6 px-20 py-4">
            {characters.map(character => (
                <CharacterItem key={character.char_id} chars={character}></CharacterItem>
            ))}
        </div>
    )

}

export default CharacterList;
