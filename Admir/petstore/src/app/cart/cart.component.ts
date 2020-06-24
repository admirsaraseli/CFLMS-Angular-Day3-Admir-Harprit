import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

	items;
	checkoutForm;
	total;
	constructor(private cartService: CartService, private formBuilder: FormBuilder) {
		this.checkoutForm = this.formBuilder.group({
		firstName: '',
		lastName: '',
		email: '',
		address: '',
		telnumber: ''
		});
	}

	ngOnInit(): void {
		this.items = this.cartService.getItems();
		this.total = this.cartService.getTotal();
	}

	onSubmit(customerData) {
		// Process checkout data here
		Swal.fire('Dear '+customerData.firstName, 'Your order has been submitted!', 'success')
		//window.alert('Your order has been submitted'+ customerData.name);

		this.items = this.cartService.clearCart();
		this.checkoutForm.reset();
	}
}
