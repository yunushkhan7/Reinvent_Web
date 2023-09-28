import { Component, OnInit } from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.scss'],
  providers: [NgbAccordionConfig]
})
export class Home3Component implements OnInit {

  constructor(config: NgbAccordionConfig) {
    config.closeOthers = true;
    config.type = 'info';
   }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
