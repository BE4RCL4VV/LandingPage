import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rga72',
  templateUrl: './rga72.component.html',
  styleUrls: ['./rga72.component.scss']
})
export class Rga72Component implements OnInit {

  constructor(private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
  }
  goHome() {
    this.route.navigate(['home']);
  }
}
