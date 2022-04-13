import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService implements OnInit {
  marvel: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  getData(): Observable<any> {
    return this.http.get<any>('https://gateway.marvel.com:443/v1/public/characters?apikey=dbfc4354c405c403c362f63cc60242a1').subscribe(data => {
    this.marvel = data;
  })
  }
}
