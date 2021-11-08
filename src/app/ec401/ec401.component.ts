import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';


@Component({
  selector: 'app-ec401',
  templateUrl: './ec401.component.html',
  styleUrls: ['./ec401.component.scss']
})
export class Ec401Component implements OnInit {

  constructor(private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
  }
  goHome() {
    this.route.navigate(['home']);
  }
}
