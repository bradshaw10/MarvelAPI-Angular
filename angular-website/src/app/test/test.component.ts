import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  marveldata: any;

  constructor(private test: TestService) { }

  ngOnInit(): void {
    this.marveldata = this.test.getData();
  }

}
