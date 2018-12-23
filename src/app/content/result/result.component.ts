import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { Personage } from '../../interfaces/personage.interface';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  characters: Personage[] = [];
  infoCharts: CharacterService;
  constructor( private route: ActivatedRoute, public charactersService: CharacterService) {
    this.infoCharts = charactersService;
  }

  ngOnInit() {
    this.characters = [];
    this.route.params
    .subscribe(param => {
      this.infoCharts.searchChart(param['patern']);
      this.characters = this.infoCharts.charactersFiltered;
    });
  }

}
