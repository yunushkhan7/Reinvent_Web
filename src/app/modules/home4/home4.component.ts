import { Component, OnInit } from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home4',
  templateUrl: './home4.component.html',
  styleUrls: ['./home4.component.scss'],
  providers: [NgbAccordionConfig]
})
export class Home4Component implements OnInit {

  constructor(config: NgbAccordionConfig) {
    config.closeOthers = true;
    config.type = 'info';
   }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
