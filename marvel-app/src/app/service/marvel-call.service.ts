import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarvelCallService {

  private apiUrl = 'https://gateway.marvel.com/v1/public/';
  private apiKey = 'a61ceb8a6efb6083a6af8bbb92fec51c';
  private ts = '1';
  private hash = '52c3a814a38d6e3e9c7ae48df242698e';
  public category!: string;

  constructor(private http: HttpClient) {}

  listaDatiListener: Subject<void> = new Subject<void>();  

  updateListaDatiListener(): Observable<any> {
    return this.listaDatiListener.pipe();
  }  
  emitUpdateListaDati() {
    this.listaDatiListener.next();
  }
  getAllData(limit: number): Observable<any> {
    return this.http.get<any>(
      this.apiUrl +
        this.category +
        '?limit=' +
        limit +
        '&' +
        'ts=' +
        this.ts +
        '&apikey=' +
        this.apiKey +
        '&hash=' +
        this.hash
    );
  }

  getDataById(id: number): Observable<any> {
    return this.http.get<any>(
      this.apiUrl +
      this.category +
        '/' +
        id +
        '?ts=' +
        this.ts +
        '&apikey=' +
        this.apiKey +
        '&hash=' +
        this.hash
    );
  }

  searchByWord(limit: number, word: string): Observable<any> {
    return this.http.get<any>(
      this.apiUrl +
      this.category +
        '?limit=' +
        limit +
        '&nameStartsWith=' +
        word +
        '&ts=' +
        this.ts +
        '&apikey=' +
        this.apiKey +
        '&hash=' +
        this.hash
    );
  }
}
