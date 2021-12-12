import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  limit = 10;
  offset = 0;

  constructor(
    private productsServices: ProductsService
  ) { }

  ngOnInit(): void {
    console.log("heeey uya");
    this.productsServices.getAll(10,0).subscribe((data) => {
        console.log("mostrando productos ",data);
        this.products = data;
        this.offset += this.limit;
    });
  }

}
