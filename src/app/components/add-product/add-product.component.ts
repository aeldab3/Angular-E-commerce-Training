import { Component } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../models/iproduct';
import { ApiProductsService } from '../../services/api-products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  categories: Icategory[];
  newProduct: IProduct = {} as IProduct;
  constructor(
    private _apiProductsService: ApiProductsService,
    private router: Router
  ) {
    this.categories = [
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Mobile' },
      { id: 3, name: 'Tablet' },
    ];
  }
  addNewProduct() {
    this._apiProductsService.addProduct(this.newProduct).subscribe({
      next: (res) => {
        alert('Product added successfully');
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  onReset() {
    this.newProduct = {} as IProduct;
  }
}
