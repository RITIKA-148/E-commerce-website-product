import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductsComponent } from '../products/products.component';
import { Data } from '@angular/router';
import{Product} from'../product.model'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  newProduct: Product = new Product('', '', ' ');

  Products: Product[] = [];


  constructor(private cartService:CartService){

  }
  ngOnInit(): void {

    
   

     }

 
     addProduct() {
      // Push the new product to the products array
      this.Products.push(this.newProduct);
  
      // Clear the form
      this.newProduct = new Product('', '', ' ');
    }

  

}
