import { Planet } from './planet.interface';
export interface ResponsePlanet {
  count?: number;
  next?: string;
  previous?: any;
  results?: Planet[];
}
