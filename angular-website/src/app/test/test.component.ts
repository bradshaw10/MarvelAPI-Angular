import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  marveldata = [];
  heroName = "";

  constructor(private test: TestService) { }

  ngOnInit(): void {
    this.test.getData().subscribe((result) => {
      console.log(result.data.results[0].name);
      this.marveldata = result.data.results;
      this.heroName = result.data.results[0].name;
    });


  }

}
