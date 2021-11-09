import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() data = {
    name: "",
    image: "",
    brand: "",
    path: ""
    }

  productName = "";

  currentID: number = -1;
  currentProduct: any = null;

  lovelyProduct: any[] = [
    {
      name: "SRT-905",
      strings: 5,
      brand: "Ibanez",
      pic: "../../assets/srt905.jpg"
    },
    {
      name: "RGA72TQM",
      strings: 6,
      brand: "Ibanez",
      pic: "../../assets/EC401.jpg"
    },
    {
      name: "EC401-FR",
      strings: 6,
      brand: "ESP",
      pic: "../../assets/RG72.jpg"
    }
  ]

  constructor(private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.currentID = params['id'];
      if(this.lovelyProduct.length -1 < this.currentID || this.currentID < 0) {
        this.goHome();
      }

      this.currentProduct = this.lovelyProduct[this.currentID];
    })
  }

  goHome() {
    this.route.navigate(['homme']);
  }

}
