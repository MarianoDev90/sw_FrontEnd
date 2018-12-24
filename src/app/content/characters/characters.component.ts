import { Component, OnInit } from '@angular/core';
import { Personage } from '../../interfaces/personage.interface';
import { CharacterService } from '../../services/character.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AppConstants } from '../../app.config';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  loading = true;

  characters: Personage[] = [];
  characterSort: Personage[] = [];
  qParams: any = {};
  parameter = '';

  constructor(
    public infoCharts: CharacterService,
    private activeRoute: ActivatedRoute,
    private router: Router) {
    infoCharts.loadCharacters().then(() => {
      this.characterSort = this.characters = infoCharts.allCharacters;
      setTimeout(() => {
        this.loading = false;
      }, 500);
    });
  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(parameter => {
      this.qParams = parameter;
      if (this.qParams != null) {
        this.parameter = this.qParams['ordenar'];
        if (this.parameter !== undefined) {
          this.sortCharactersBy(this.parameter);
        }
      }
    });
  }

  sortCharactersBy(param: String) {
    this.characters = [];
    switch (param) {
      case AppConstants.nameFilter:
        this.characters = this.characterSort.sort(this.sortByName);
        break;
      case AppConstants.massFilter:
        this.characters = this.characterSort.sort(this.sortByMass);
        break;
      case AppConstants.heigthFilter:
        this.characters = this.characterSort.sort(this.sortByHeigth);
        break;
    }
  }

  public sortBy(param: String) {
    this.router.navigate(['/personajes'], { queryParams: { ordenar: param } });
  }

  sortByName(c1: Personage, c2: Personage) {
    return c1.name === c2.name ? 0 : c1.name > c2.name ? 1 : -1;
  }

  sortByMass(c1: Personage, c2: Personage) {
    return c1.mass === c2.mass ? 0 : c1.mass > c2.mass ? 1 : -1;
  }
  sortByHeigth(c1: Personage, c2: Personage) {
    return c1.height === c2.height ? 0 : c1.height > c2.height ? 1 : -1;
  }

  goToDetails(personage: Personage) {
    console.log(personage.url);
    const onePersonage: NavigationExtras = {
      queryParams: {
        'url': personage.url,
        'name': personage.name
      }
    };
    this.router.navigate(['personaje', personage.name], onePersonage);
  }
}
