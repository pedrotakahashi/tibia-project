import axios from 'axios';
import { Character } from '../interface/character';

export const api = (name:Character) => {
  axios.create({
    baseURL: `https://api.tibiadata.com/v2/characters/${name}.json`
  })
}
