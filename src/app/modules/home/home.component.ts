import { Component, OnInit } from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbAccordionConfig]
})
export class HomeComponent implements OnInit {
  constructor(config: NgbAccordionConfig) {
    config.closeOthers = true;
    config.type = 'info';
   }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
 
}
