import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiProductsService {
  constructor(
    private httpClient: HttpClient,
    private _UserAuthService: UserAuthService
  ) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.baseUrl}/products`, {
      headers: new HttpHeaders({
        authorization: `Bearer ${this._UserAuthService.getToken()}`,
      }),
    });
  }
  getProductById(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(
      `${environment.baseUrl}/products/${id}`
    );
  }
  getProductByCatId(catId: number): Observable<IProduct[]> {
    let searchString = new HttpParams();
    searchString = searchString.append('catId', catId);
    return this.httpClient.get<IProduct[]>(`${environment.baseUrl}/products`, {
      params: searchString,
    });
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>(
      `${environment.baseUrl}/products`,
      JSON.stringify(product)
    );
  }
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
