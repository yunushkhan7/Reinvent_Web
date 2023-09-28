import { Component, OnInit } from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss'],
  providers: [NgbAccordionConfig]
})
export class Home2Component implements OnInit {

  constructor(config: NgbAccordionConfig) {
    config.closeOthers = true;
    config.type = 'info';
   }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
 

}
