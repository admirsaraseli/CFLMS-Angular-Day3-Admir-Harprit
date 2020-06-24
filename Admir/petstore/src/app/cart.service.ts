import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
	
	items = [];
	total = 0;
	constructor() { }

	addToCart(product) {
		this.items.push(product);
		this.total += product.price;
	}

	getItems() {
		return this.items;
	}

	getTotal() {
		return this.total;
	}

	clearCart() {
		this.items = [];
		return this.items;
	}
}
