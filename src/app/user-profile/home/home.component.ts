import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/product.service'
import {Product} from '../../shared/product.model'

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products:[Product];
  constructor(private _product:ProductService) {

   }

  ngOnInit() {
  this.getProducts();
  }

  getProducts(){
    this._product.getProductos().subscribe(
      res=>{
        this.products=res['user'];
        console.log(this.products[0]);
      },
      err=>{
        console.log(JSON.stringify(err));
      }
    )
  }
}
