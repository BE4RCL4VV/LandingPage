import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  data: any[] = [
    { name: "SRT-905", 
    image: "../../assets/srt905.jpg",
    brand: "Ibanez",
    path: "/srt905" 
    },
    { name: "EC-401", 
    image: "../../assets/EC401.jpg",
    brand: "ESP",
    path: "/ec401" 
    },
    { name: "rga-72tqm", 
    image: "../../assets/RG72.jpg",
    brand: "Ibanez",
    path: "/rga72" 
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
