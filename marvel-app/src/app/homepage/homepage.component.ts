import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  types: string[]
  
  constructor(){
    this.types = [
      'Hero', 'Comics', 'Creators', 'Series', 'Stories', 'Events'
    ] 
  }
  
}
