import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bi-analytics',
  templateUrl: './bi-analytics.component.html',
  styleUrls: ['./bi-analytics.component.scss']
})
export class BIAnalyticsComponent implements OnInit {
  selectedValue : string = 'Budget'
  slectedCountry : string ='Country'
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  ChangeValue(value, val){
    if(val == 'budget'){
      this.selectedValue = value
    }
    if(val == 'country'){
      this.slectedCountry = value
    }
  }
}
