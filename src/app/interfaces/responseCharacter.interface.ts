import { Personage } from './personage.interface';

export interface ResponseCharacter {
  count?: number;
  next?: string;
  previous?: String;
  results?: Personage[];
}
