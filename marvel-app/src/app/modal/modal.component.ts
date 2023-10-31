import { Component } from '@angular/core';
import { ModalService } from '../service/modal.service';
import { MarvelCallService } from '../service/marvel-call.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  dataById: any;
  dataByIdMap : any;
  data = ['comics', 'events', 'series', 'stories'];

  constructor(
    private modal: ModalService,
    private marvelCall: MarvelCallService
  ) {}

  ngOnInit() {
    this.marvelCall.getDataById(this.modal.modalData).subscribe((data) => {
      this.dataById = data.data.results[0];
      this.dataByIdMap = {
        comics: this.dataById.comics,
        events: this.dataById.events,
        stories: this.dataById.stories,
        series: this.dataById.series,
      };
      console.log(this.dataById);
    });
  }

  closeModal() {
    this.modal.closeModal();
  }
}
