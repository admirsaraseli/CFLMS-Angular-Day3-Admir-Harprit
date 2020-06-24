import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2'

import { products } from '../products';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {

	product;
	constructor(private route: ActivatedRoute, private cartService: CartService) { }

	addToCart(product) {
		//window.alert('Your product has been added to the cart!');
		Swal.fire('Your product has been added to the cart!')
		this.cartService.addToCart(product);
	}

	ngOnInit(): void {
		this.route.paramMap.subscribe(params => {
		this.product = products[+params.get('productId')];
	});

	}

}
