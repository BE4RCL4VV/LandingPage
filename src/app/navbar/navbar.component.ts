import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  urls: any[] = [
    { route: 'home', name: 'Home' },
    { route: '/srt905', name: 'SRT-905' },
    { route: '/ec401', name: 'EC-401' },
    { route: '/rga72', name: 'RGA-72' },
    { route: '/product', name: 'Products' }
  ]

  constructor() { }

  ngOnInit() {
  }
  functionName(item: string){
    console.log(item + 'was clicked');
  }

}
