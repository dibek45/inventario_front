import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment}  from '../../environments/environment';
import {Product} from './product.model'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  selectedProduct: Product={
    productoID:'',
    descripcion:'',
    unidad_despacho:'',
    balance_actual:0,
    cantidad_disponible:0
  }

  constructor(private http:HttpClient) { }

  getProductos(){
    return this.http.get(environment.apiBaseUrl+'/products');
  }

}
