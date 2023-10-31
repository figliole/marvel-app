import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalData : any;
  
  private showModal = new Subject<boolean>();
  showModal$ = this.showModal.asObservable();

  openModal() {
    this.showModal.next(true);
  }

  closeModal() {
    this.showModal.next(false);
  }
}
