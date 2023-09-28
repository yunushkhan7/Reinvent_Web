import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sentimental-analytics',
  templateUrl: './sentimental-analytics.component.html',
  styleUrls: ['./sentimental-analytics.component.scss']
})
export class SentimentalAnalyticsComponent implements OnInit {
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
