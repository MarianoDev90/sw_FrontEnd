import { Pipe, PipeTransform } from '@angular/core';
import { Personage } from '../interfaces/personage.interface';
import { CharacterService } from '../services/character.service';

@Pipe({
  name: 'orderByPlanet'
})
export class OrderByPlanetPipe implements PipeTransform {

  constructor (private characterService: CharacterService) {

  }

  transform(allcharacters: Personage[]): Personage[] {
    this.characterService.sortByPlanet();
    return this.characterService.allCharacters;
  }

}
