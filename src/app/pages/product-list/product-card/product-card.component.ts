import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from '../../../component/primary-button/primary-button.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
    <div
      class="bg-white shadow-md border rounded-xl p-6 flex flex-col h-full relative"
    >
      <div class="mx-auto">
        <img
          [src]="product().image"
          class="w-[200px] h-[100px] object-contain"
        />
      </div>

      <div
        class="flex flex-col flex-grow min-h-[80px] items-center text-center"
      >
        <span class="text-md font-bold block leading-tight">{{
          product().title
        }}</span>
        <span class="text-sm">{{ '$' + product().price }}</span>
      </div>

      <app-primary-button
        (btnClicked)="cartService.addToCart(product())"
        class="mt-auto w-full"
        label="Add to Cart"
      />

      <span
        class="absolute top-2 right-3 text-sm font-bold"
        [class]="product().stock ? 'text-green-500' : 'text-red-500'"
      >
        @if (product().stock) {
        {{ product().stock }} left } @else { Out of stock }
      </span>
    </div>
  `,
  styles: ``,
})
export class ProductCardComponent {
  cartService = inject(CartService);
  product = input.required<Product>();
}
