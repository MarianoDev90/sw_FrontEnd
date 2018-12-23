import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Personage } from '../interfaces/personage.interface';
import { ResponseCharacter } from '../interfaces/responseCharacter.interface';
import { AppConstants } from '../app.config';
import { Planet } from '../interfaces/planet.interface';
import { ResponsePlanet } from '../interfaces/reponsePlanet.interface';
import { load } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  headers: HttpHeaders = new HttpHeaders();
  CHARACTERS_REQUIRED = AppConstants.firstCharacters;
  allCharacters: Personage[] = [];
  allPlanets: Planet[] = [];
  currentChart: Personage = {};
  charactersFiltered: Personage[] = [];

  constructor(public http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
  }

  public loadCharacters() {
    this.allCharacters = [];
    return new Promise((resolve, reject) => {
      this.getCharacters(AppConstants.urlCharacters, this.allCharacters);
      resolve();
    });
  }

  private getCharacters(url: String, characters: Personage[]): Personage[] {
    if (url != null && characters.length < this.CHARACTERS_REQUIRED) {
      this.http
        .get(url.toString(), { headers: this.headers })
        .subscribe((response: ResponseCharacter) => {
          if (response != null) {
            response.results.forEach(element => {
              characters.push(element);
            });

            this.getCharacters(response.next, characters);
          }
        });
    }
    return characters;
  }

  public loadResidents() {
    this.allCharacters = [];
    return new Promise((resolve, reject) => {
      this.getAllCharacters(AppConstants.urlCharacters, this.allCharacters);
      resolve();
    });
  }

  private getAllCharacters(url: String, characters: Personage[]): Personage[] {
    if (url != null) {
      this.http
        .get(url.toString(), { headers: this.headers })
        .subscribe((response: ResponseCharacter) => {
          response.results.forEach(element => {
            characters.push(element);
          });
          this.getAllCharacters(response.next, characters);
        });
    }
    return characters;
  }

  sortByPlanet() {
    this.allCharacters
      .sort((a: Personage, b: Personage) => {
        return (a.homeworld === b.homeworld) ? 0 : (a.homeworld > b.homeworld ? 1 : -1);
      });
  }

  public loadPlanets() {
    this.allPlanets = [];
    this.getPlanets(AppConstants.urlPlanets, this.allPlanets);

  }
  private getPlanets(url: String, planets: Planet[]) {
    if (url != null) {
      this.http
        .get(url.toString(), { headers: this.headers })
        .subscribe((response: ResponsePlanet) => {
          response.results.forEach(element => {
            planets.push(element);
          });
          this.getAllCharacters(response.next, planets);
        });
    }
    return planets;
  }

  public getCharacter(name: String): Personage {
    this.allCharacters = [];
    this.currentChart = {};

    name = name.toUpperCase();
    if (this.allCharacters.length === 0) {
      this.loadCharacters().then(() => {
        for (let i = 0; i < this.allCharacters.length - 1; i++) {
          const element = this.allCharacters[i];
          if (element.name.toUpperCase().includes(name.toString())) {
            this.currentChart = element;
          }
        }
      });
    }
    return this.currentChart;
  }
  public searchChart(patern: string): Personage[] {
    console.log(patern);
    this.allCharacters = [];
    patern = patern.toUpperCase();
      this.loadCharacters().then(() => {
        console.log(this.allCharacters);
        this.allCharacters.filter(person => {
        });
      });
    return this.charactersFiltered;
  }
}

