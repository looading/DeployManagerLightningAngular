import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private item = (new Array(100)).fill(1).map((item, index) => index);
  constructor() { }

  ngOnInit() {
  }

}
