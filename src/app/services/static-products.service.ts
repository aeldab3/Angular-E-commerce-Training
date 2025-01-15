import { Injectable, Input } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProductsService {
  products: IProduct[];
  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Dell Laptop',
        price: 55000,
        description: 'Dell Laptop',
        quantity: 10,
        catId: 1,
        imageUrl: 'https://fakeimg.pl/250x100/',
      },
      {
        id: 2,
        name: 'Lenovo Laptop',
        price: 50000,
        description: 'Lenovo Laptop',
        quantity: 3,
        catId: 1,
        imageUrl: 'https://fakeimg.pl/250x100/',
      },
      {
        id: 3,
        name: 'Iphone Mobile',
        price: 15000,
        description: 'Iphone Mobile',
        quantity: 4,
        catId: 2,
        imageUrl: 'https://fakeimg.pl/250x100/',
      },
      {
        id: 4,
        name: 'Samsung Mobile',
        price: 20000,
        description: 'Samsung Mobile',
        quantity: 8,
        catId: 2,
        imageUrl: 'https://fakeimg.pl/250x100/',
      },
      {
        id: 5,
        name: 'Samsung Tablet',
        price: 10000,
        description: 'Samsung Tablet',
        quantity: 6,
        catId: 3,
        imageUrl: 'https://fakeimg.pl/250x100/',
      },
      {
        id: 6,
        name: 'Mac Tablet',
        price: 15000,
        description: 'Mac Tablet',
        quantity: 15,
        catId: 3,
        imageUrl: 'https://fakeimg.pl/250x100/',
      },
      {
        id: 7,
        name: 'Mac Tablet3',
        price: 15000,
        description: 'Mac Tablet3',
        quantity: 1,
        catId: 3,
        imageUrl: 'https://fakeimg.pl/250x100/',
      },
    ];
  }
  getAllProducts(): IProduct[] {
    return this.products;
  }
  getProductById(id: number): IProduct | null {
    let product = this.products.find((pro) => pro.id == id);
    if (product) {
      product.name = product.name.toLowerCase();
      return product;
    }
    return null;
  }

  getProductsByCatId(catId: number): IProduct[] {
    if (catId == 0) {
      return this.products;
    }
    return this.products.filter((pro) => pro.catId == catId);
  }

  mapProductsToIds(): number[] {
    return this.products.map((pro) => pro.id);
  }
}
