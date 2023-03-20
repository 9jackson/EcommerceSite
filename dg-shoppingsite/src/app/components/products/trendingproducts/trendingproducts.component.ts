import {  Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { TrendingproductsService } from 'src/app/services/trendingproducts.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-trendingproducts',
  templateUrl: './trendingproducts.component.html',
  styleUrls: ['./trendingproducts.component.css']
})
export class TrendingproductsComponent implements OnInit {

  trendingproducts: Product[]=[];
  


  constructor(private trendingProductService: TrendingproductsService,config: NgbCarouselConfig) {  
    config.interval = 2000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = true;  

  }  
  getTrendingProducts(): void{
    this.trendingProductService.getTrendingItems()
    .subscribe(data=>(this.trendingproducts=data));
    

  }


  ngOnInit(): void {
    this.getTrendingProducts();
    console.log(this.trendingproducts);
  }

  ngAfterViewChecked(): void{
 
  }

}
