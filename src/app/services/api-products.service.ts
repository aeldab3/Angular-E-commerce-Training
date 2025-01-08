import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiProductsService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.baseUrl}/products`);
  }
  getProductById(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(
      `${environment.baseUrl}/products/${id}`
    );
  }
  getProductByCatId(catId: number): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `${environment.baseUrl}/products?catId=${catId}`
    );
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>(
      `${environment.baseUrl}/products`,
      product
    );
  }
  /*   addProduct(formData: FormData): Observable<IProduct> {
    return this.httpClient.post<IProduct>(
      `${environment.baseUrl}/products`,
      formData
    );
  } */
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.put<IProduct>(
      `${environment.baseUrl}/products/${product.id}`,
      product
    );
  }
  deleteProduct(id: number): Observable<IProduct> {
    return this.httpClient.delete<IProduct>(
      `${environment.baseUrl}/products/${id}`
    );
  }
}
