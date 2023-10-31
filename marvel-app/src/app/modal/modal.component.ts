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
  data = ['comics', 'events', 'stories', 'series'];

  constructor(
    private modal: ModalService,
    private marvelCall: MarvelCallService
  ) {}

  ngOnInit() {
    this.marvelCall.getDataById(this.modal.modalData).subscribe((data) => {
      this.dataById = data.data.results;
    });
  }

  closeModal() {
    this.modal.closeModal();
  }
}
