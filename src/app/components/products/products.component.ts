import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../models/iproduct';
import { HighlightCardDirective } from '../../directives/highlight-card.directive';
import { StaticProductsService } from '../../services/static-products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule, HighlightCardDirective],
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnChanges {
  products: IProduct[];
  filteredProducts: IProduct[];
  totalOrderPrice: number = 0;

  @Input() receivedCatId: number = 0;
  @Output() onTotalPriceChanged: EventEmitter<number>;
  constructor(
    private _StaticProductsService: StaticProductsService,
    private router: Router
  ) {
    this.products = this._StaticProductsService.getAllProducts();
    this.filteredProducts = this.products;
    this.onTotalPriceChanged = new EventEmitter<number>();
  }
  ngOnChanges() {
    this.filteredProducts = this._StaticProductsService.getProductsByCatId(
      this.receivedCatId
    );
  }
  trackItem(index: number, product: IProduct) {
    return product.id;
  }
  buy(count: string, price: number) {
    this.totalOrderPrice += parseInt(count) * price;
    this.onTotalPriceChanged.emit(this.totalOrderPrice);
  }
  decrementQuantity(product: IProduct, count: string) {
    const requestQuantity = parseInt(count);
    if (requestQuantity > product.quantity) {
      return alert("We don't have enough quantity");
    } else {
      return (product.quantity -= requestQuantity);
    }
  }
  navigateToDetails(id: number, name: string) {
    this.router.navigateByUrl(`/details/${id}/${name}`);
  }
}
