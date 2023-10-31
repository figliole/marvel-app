import { Component } from '@angular/core';
import { ModalService } from '../service/modal.service';
import { MarvelCallService } from '../service/marvel-call.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

interface MarvelResponse {
  data: {
    results: any[];
  };
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  IMAGE_SIZE: string = 'standard_xlarge';
  heroes: any[] = [];
  imageUrl!: string;
  isVisible = false;
  isLoading = false;
  datiSubscription!: Subscription;


  constructor(
    private modal: ModalService,
    private marvelCall: MarvelCallService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.caricaDati();
    this.datiSubscription = this.marvelCall
      .updateListaDatiListener()
      .subscribe(() => {
        this.isLoading = true;
        this.caricaDati();
      });
  }

  caricaDati() {
    this.marvelCall.getAllData(20).subscribe((data) => {
      this.heroes = data.data.results;
      this.isLoading = false;
    });
  }

  openModal(id: number) {
    this.isVisible = true;
    this.modal.modalData = id;
    this.modal.openModal();
  }
}
