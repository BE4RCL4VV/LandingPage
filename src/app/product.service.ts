import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // @Injectable
  index: number = 0; 
  private data: any[] = [
    {
      name: "",
      image: "",
      text: ""
    }
  ]

constructor() { }

getProductByIndex(index: number): any {
  return this.data[index];
}

}
