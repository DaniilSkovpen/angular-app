import { ProductService } from './../../services/products.service';
import { IProduct } from './../../models/products';
import { Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  title = 'angular-app';
  //products: IProduct[] = []
  loading = false;
  products$: Observable<IProduct[]>;
  term = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loading = true;
    this.products$ = this.productService
      .getAll()
      .pipe(tap(() => (this.loading = false)));
    // this.productService.getAll().subscribe(products=>{
    //   this.products = products
    //   this.loading = false;
    // })
  }
}
