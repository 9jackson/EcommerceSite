import {  Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { TrendingproductsService } from 'src/app/services/trendingproducts.service';

@Component({
  selector: 'app-trendingproducts',
  templateUrl: './trendingproducts.component.html',
  styleUrls: ['./trendingproducts.component.css']
})
export class TrendingproductsComponent implements OnInit {

  trendingproducts: Product[]=[];

  constructor(private trendingProductService: TrendingproductsService)
  {

  }

  getTrendingProducts(): void{
    this.trendingProductService.getTrendingItems()
    .subscribe(data=>(this.trendingproducts=data));
    

  }


  ngOnInit(): void {
    this.getTrendingProducts();
    console.log(this.trendingproducts);
  }

}
