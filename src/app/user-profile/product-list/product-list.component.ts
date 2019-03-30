import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {ProductService} from '../../shared/product.service'
import {Product} from '../../shared/product.model'
import { MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:[Product];

  constructor(private _product:ProductService) { 
 
  }


  ngOnInit() {
console.log("init desde padre")
    this.getProducts();
  }


  getProducts(){
     this._product.getProductos().subscribe(
      res=>{
        this.products=res['user'];
      },
      err=>{
        console.log(JSON.stringify(err));
      }
    )
  }
}
