import { useState } from "react";
import { getCharacterByName } from "../../services/characterService";

export const InputGetCharacter = () => {
  const [name, setName] = useState("");

  const inputSearchCharacter = async () => {
    if (!name) return;
    const nameCharacter = name;
    const response = await getCharacterByName(nameCharacter);
    console.log(response.characters);
  };

  return (
    <div className="content-get-character">
      <form>
        <label>
          Name Character:
          <input
            type="text"
            name="name"
            placeholder="Insert Name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="button" onClick={() => inputSearchCharacter()} />
      </form>
    </div>
  );
};
