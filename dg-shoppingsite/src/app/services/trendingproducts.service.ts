import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../components/products/product.model';

@Injectable({
  providedIn: 'root'
})
export class TrendingproductsService {


  constructor(private http: HttpClient) { }

  getTrendingItems(): Observable<Product[]>
  {
    return this.http.get<Product[]>("http://localhost:3000/trendingproducts")
   
  }
}
