import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() public item;
  @Input() public order;
  private collapsed = true;
  private currentLink: string;
  constructor(private router: Router) { }

  itemAction() {
    if (this.item.children) {
      this.collapsed = !this.collapsed;
    } else {
      this.router.navigate([this.item.link]);
    }
  }

  get actived() {
    const link = this.item.link;
    if (link === undefined) {
      return false;
    }
    // const rule = new RegExp(`^${this.router.url}`);
    return link === this.router.url;
  }

  ngOnInit() {
  }

}
