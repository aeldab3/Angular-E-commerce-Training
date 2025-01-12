import { Component, OnInit } from '@angular/core';
import { ApiProductsService } from '../../services/api-products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../models/iproduct';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css',
})
export class UpdateProductComponent implements OnInit {
  categories: Icategory[];
  product: IProduct = {} as IProduct;
  constructor(
    private _apiProductsService: ApiProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.categories = [
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Mobile' },
      { id: 3, name: 'Tablet' },
    ];
  }
  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    this._apiProductsService.getProductById(productId).subscribe({
      next: (product) => {
        this.product = product;
      },
      error: (err) => {
        console.error(err.message);
      },
    });
  }

  updateProduct(): void {
    this._apiProductsService.updateProduct(this.product).subscribe({
      next: () => {
        alert('Product updated successfully');
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.error(err.message);
      },
    });
  }
}
