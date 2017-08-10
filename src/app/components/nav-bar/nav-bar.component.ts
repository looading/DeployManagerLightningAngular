import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, AfterContentInit {

  private prefix: string;

  constructor(private router: Router) { }

  get paths() {
    this.prefix = '';
    const url = this.router.url.split('/');
    url.shift();

    if (url[0] === 'pages') {
      this.prefix = '/pages';
      url.shift();
    }
    return url;
  }

  navigateTo(index) {
    let url = this.router.url.split('/');
    url.shift();
    console.log(url, index);
    url = url.splice(0, this.prefix ? index + 2 : index + 1);
    url.unshift('');
    console.log(url);
    this.router.navigate([url.join('/')]);
  }

  ngOnInit() {
    // console.log(this.router.url);
  }

  ngAfterContentInit() {
    // console.log(this.router.url);
  }

}
