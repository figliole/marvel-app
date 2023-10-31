import { Component } from '@angular/core';
import { MarvelCallService } from '../service/marvel-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  word: string = '';

  constructor(private marvelCall: MarvelCallService, private router: Router) {}

  getRouterLink(category: string) {
    this.router.navigate(['card', category]);
    this.marvelCall.category = category;
    this.marvelCall.emitUpdateListaDati();
  }

  search() {
    const name = 'characters';
    console.log(this.word);
    this.marvelCall.searchByWord(20, this.word).subscribe((data) => {
      console.log(data);
    });
  }
}
