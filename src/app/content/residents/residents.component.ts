import { Component, OnInit } from '@angular/core';
import { Personage } from '../../interfaces/personage.interface';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css']
})
export class ResidentsComponent implements OnInit {

  loading = true;

  residents: Personage[] = [];
  constructor(public infoCharts: CharacterService) {

    infoCharts.loadResidents().then( () => {
      this.residents = infoCharts.allCharacters;
      setTimeout(() => {
        this.loading = false;
      }, 500);
    });
  }

  ngOnInit() {
  }
}
