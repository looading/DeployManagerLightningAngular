import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() public item;
  @Input() public order;
  constructor() { }

  ngOnInit() {
    console.log(this.item, this.order);
  }

}
