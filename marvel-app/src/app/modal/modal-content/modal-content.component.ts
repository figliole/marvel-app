import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent {
  @Input() dati! : Object;
  
  ngOnInit() {
    console.log("item:" + this.dati);
    
  }
}
