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
    console.log('hello')
    return this.http.get('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=dbfc4354c405c403c362f63cc60242a1&hash=7cfdc10da4f83dd1de3aaf98894c9f86')
  }
}
