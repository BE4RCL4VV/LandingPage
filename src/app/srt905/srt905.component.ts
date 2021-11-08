import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-srt905',
  templateUrl: './srt905.component.html',
  styleUrls: ['./srt905.component.scss']
})
export class Srt905Component implements OnInit {

  constructor(private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
  }
  goHome() {
    this.route.navigate(['home']);
  }
}
