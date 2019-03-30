import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {ProductService} from '../../shared/product.service'
import {Product} from '../../shared/product.model'
import { MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-table',
  template:`
  
  <div class="search-div">
  <button mat-raised-button>
    <mat-icon>add</mat-icon>Create
  </button>
  <mat-form-field class="search-form-field" floatLabel="never">
    <input type="text" matInput [(ngModel)]="searchKey" placeholder="Buscar" autocomplete="off" (keyup)="applyFilter()">
    <button mat-button matSuffix mat-icon-button arial-label="Clear" (click)="onSearchClear()" *ngIf="searchKey"> 
      <mat-icon>close</mat-icon>
    </button>
  </mat-form-field>
</div>


<div class="mat-elevation-z8" class="table">
  <mat-table [dataSource]=listData matSort >
    <ng-container matColumnDef="productoID">
      <mat-header-cell *matHeaderCellDef mat-sort-header>ProductoID</mat-header-cell>
      <mat-cell *matCellDef="let element">{{element.productoID}}</mat-cell>
    </ng-container>
    <ng-container matColumnDef="descripcion">
        <mat-header-cell *matHeaderCellDef mat-sort-header>Descripcion</mat-header-cell>
        <mat-cell *matCellDef="let element">{{element.descripcion}}</mat-cell>
    </ng-container>
    <ng-container matColumnDef="unidad_despacho">
        <mat-header-cell *matHeaderCellDef mat-sort-header>Unidad de despacho</mat-header-cell>
        <mat-cell *matCellDef="let element">{{element.unidad_despacho}}</mat-cell>
    </ng-container>
    <ng-container matColumnDef="loading">
      <mat-footer-cell *matFooterCellDef colspan="6">
          <i class="material-icons">hourglass_full</i>Cargando datos...
      </mat-footer-cell>
    </ng-container>
    <ng-container matColumnDef="nothing">
      <mat-footer-cell *matFooterCellDef colspan="6">
          No hay productos 
      </mat-footer-cell>
    </ng-container> 
      <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
      <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
      <mat-footer-row *matFooterRowDef="['loading']" [ngClass]="{'hide':listData!=null}"></mat-footer-row>
      <mat-footer-row *matFooterRowDef="['nothing']" [ngClass]="{'hide':!(listData!=null && listData.data.length==0)}"></mat-footer-row>
  </mat-table>
    <mat-paginator [pageSizeOptions]="[5,10,25,100]" [pageSize]="5" showFirstLastButtons></mat-paginator>
</div>
`,
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {
  products: Array<Product> = [];
  listData:MatTableDataSource<any>;
  displayedColumns:string[]=['productoID','descripcion','unidad_despacho'];
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @Input() datos:any[];
  searchKey:string;

  constructor(private _product:ProductService) {
    
   }

   ngOnChanges() {
    this.getProducts();
  }

  ngOnInit() {
   }

  ngDoCheck() {
   // this.getProducts();  
  }

  ngAfterContentInit() {
   // this.getProducts();  
  }

  ngAfterContentChecked() {
   // this.getProducts();  
  }

  ngAfterViewInit() {
   // this.getProducts(); 
   }


  getProducts(){
  
    this.products=this.datos;
    this.listData=new MatTableDataSource(this.products);
    this.listData.sort=this.sort;
    this.listData.paginator=this.paginator;
    this.listData.filterPredicate=(data,filter)=>{
      return this.displayedColumns.some(ele=>{
        return ele!='actions'&& data[ele].toLowerCase().indexOf(filter)!=-1;
      });
    }
 }

 onSearchClear(){
   this.searchKey="";
   this.applyFilter();
 }

 applyFilter(){
   this.listData.filter=this.searchKey.trim().toLowerCase();
 }


}
