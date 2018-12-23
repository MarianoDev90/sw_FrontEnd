import { Component, OnInit } from '@angular/core';
import { Personage } from '../../interfaces/personage.interface';
import { CharacterService } from '../../services/character.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConstants } from '../../app.config';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
    private router: Router
  ) {
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

      default:
        break;
    }
    console.log(this.characters);
  }

  public sortBy(param: String) {
    this.router.navigate(['/personajes'], { queryParams: { ordenar: param } });
  }

  sortByName(c1: Personage, c2: Personage) {
    if (c1.name > c2.name) {
      return 1;
    } else if (c1.name === c2.name) {
      return 0;
    } else {
      return -1;
    }
  }

  sortByMass(c1: Personage, c2: Personage) {
    if (c1.mass > c2.mass) {
      return 1;
    } else if (c1.mass === c2.mass) {
      return 0;
    } else {
      return -1;
    }
  }
  sortByHeigth(c1: Personage, c2: Personage) {
    if (c1.height < c2.height) {
      return -1;
    } else if (c1.height === c2.height) {
      return 0;
    } else {
      return 1;
    }
  }
}
