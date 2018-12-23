import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  lastURL: String = '';
  valueToFind: String = '';
  constructor(public info: InfoService,
              private route: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.
      subscribe(parameter => {
    });
  }

  findCharacter() {
    this.lastURL = '';
    if (this.valueToFind.length < 1 ) {
      return;
    }
    this.lastURL = this.route.url;
    this.route.navigate(['/resultados', this.valueToFind]);
  }

  returnPage() {
    if (this.lastURL != null) {
      this.valueToFind = '';
      this.route.navigate([this.lastURL]);
    }
  }
}
