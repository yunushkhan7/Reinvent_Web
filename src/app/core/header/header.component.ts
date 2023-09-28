import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactUsComponent } from '../../modules/contact-us/contact-us.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  slectedCountry : string ='Language'
  MenuToggle: boolean = false;
  toggleServices: boolean = false;
  toggleDataAnaly: boolean = false;
  toggleSolutions: boolean = false;
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}
  menutoggle() {
    this.MenuToggle = !this.MenuToggle;
  }
  modalopen() {
    this.modalService
      .open(ContactUsComponent, { 
        ariaLabelledBy: 'modal-basic-title' ,
        windowClass: 'contact_us'
      })
  }

  clickToggle(link){
    if(link == 'services'){
      this.toggleServices = !this.toggleServices;
    }
    if(link == 'data_anal'){
      this.toggleDataAnaly = !this.toggleDataAnaly;
    }
    if(link == 'solutions'){
      this.toggleSolutions = !this.toggleSolutions;
    }
    
  }

  ChangeValue(value, val){
    if(val == 'country'){
      this.slectedCountry = value
    }
  }
}
