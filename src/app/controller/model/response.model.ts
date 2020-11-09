import {Weapon} from './weapon.model';
import {Character} from './character.model';
import {Request} from './request.model';

export class Response {
  result: Array<Weapon | Character>;
  userData: Request;

}
