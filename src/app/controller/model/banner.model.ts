import {Type} from './type.model';
import {Character} from './character.model';
import {Weapon} from './weapon.model';

export class Banner {
  id: number;
  name: string;
  type_id: number;
  type: Type;
  image: string;
  characters: Array<Character>;
  weapons: Array<Weapon>;
  rate_up_characters: Array<Character>;
  rate_up_weapons: Array<Weapon>;

}
