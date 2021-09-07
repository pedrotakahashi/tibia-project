import React, { useState } from "react";
import { getCharacterByName } from "../../services/characterService";

export const InputGetCharacter = () => {
  const [name, setName] = useState("");
  const setCharacter = () => {
    getCharacterByName(name);
  };
  return (
    <div className="content-get-character">
      {/* <form action="" method="get" placeholder="input Name Character"></form>
      <input type="submit" value="" onClick={setCharacter}>
        Search
      </input> */}
      <h2>ola</h2>
    </div>
  );
};
