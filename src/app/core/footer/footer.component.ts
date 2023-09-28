import { Component, OnInit } from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactUsComponent } from '../../modules/contact-us/contact-us.component';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [NgbAccordionConfig]
})
export class FooterComponent implements OnInit {
 
  constructor(config: NgbAccordionConfig, private modalService: NgbModal) { 
    config.closeOthers = true;
    config.type = 'info';
  }

  ngOnInit(): void {
  }

  modalopen() {
    this.modalService
      .open(ContactUsComponent, { 
        ariaLabelledBy: 'modal-basic-title' ,
        windowClass: 'contact_us'
      })
  }
}
