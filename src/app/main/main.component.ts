import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  guitars: any[] = [
    { route: '/ec401'},
    { route: '/srt905', name: 'SRT-905', Image: '../../assets/srt905.jpg' },
    { route: '/rga72tqm', name: 'RGA-72TQM', Image: '../../assets/RG72.jpg' }
  ]
  constructor() { 
  }

  ngOnInit() {
  }

}
