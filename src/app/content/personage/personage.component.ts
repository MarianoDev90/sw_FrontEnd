import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { Personage } from '../../interfaces/personage.interface';

@Component({
  selector: 'app-personage',
  templateUrl: './personage.component.html',
  styleUrls: ['./personage.component.css']
})
export class PersonageComponent implements OnInit {

  infoChart: CharacterService;
  currenteChart: Personage;
  chartName: String;

  constructor(private route: ActivatedRoute,
    public character: CharacterService) {
    this.infoChart = character;
  }

  ngOnInit() {
    this.route.params
      .subscribe(parameter => {
        console.log('accede', parameter);
        this.route.queryParams.subscribe( data => {
          console.log(data);
        });
      });
  }
}
