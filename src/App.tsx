import { useEffect, useState } from "react";
import { InputGetCharacter } from "./components/GetCharacter";
import { _axios } from "./services/axios";
import { getAllWorlds } from "./services/characterService";

function App() {
  const [numberOfPlayersOnline, setNumberOfPlayersOnline] = useState(0);
  const [worlds, setWorlds] = useState<any[]>([]);
  useEffect(() => {
    const getAsyncWorlds = async () => {
      const responseWorld = await getAllWorlds();
      setNumberOfPlayersOnline(responseWorld.worlds.online);
      setWorlds(responseWorld.worlds.allworlds);
    };
    getAsyncWorlds();
  }, []);

  if (worlds.length === 0) return <div>Loading</div>;

  return (
    <div className="App">
      <div className="content">
        <h2>Tibia Characters using API</h2>
        <InputGetCharacter />
        <h3>Lista de Mundos</h3>
        <span>Número de players online: {numberOfPlayersOnline}</span>
        <ul>
          {worlds.map((x) => (
            <li>
              <br />
              {x.name} <br />
              Online: {x.online} - {x.worldtype} <br />
              Location: {x.location}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * {name}
 * Online: {online} - {worldtype}
 * Location: {location}
 */

export default App;
