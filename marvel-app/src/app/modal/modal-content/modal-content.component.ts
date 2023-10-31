import { Component, Input } from '@angular/core';
import { MarvelCallService } from 'src/app/service/marvel-call.service';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent {
  @Input() item! : string;
  @Input() id!: number;

  dataPerCategory : any;
  
  constructor(private marvelCall: MarvelCallService){}

  ngOnInit() {
    this.marvelCall.getDataByIdCategory(this.id, this.item).subscribe((data)=>{
      this.dataPerCategory = data.data.results;
      console.log(this.dataPerCategory);
      
    })
    
  }
}
