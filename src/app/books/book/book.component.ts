import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;

  isInCart: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart() {
    this.isInCart = true;
    this.cartService.add(this.book);
  }
  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }
}

///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { CartService } from 'src/app/services/cart.service';
// import { Book } from '../../types/Book';

// @Component({
//   selector: 'app-book',
//   templateUrl: './book.component.html',
//   styleUrls: ['./book.component.css'],
// })
// export class BookComponent implements OnInit {
//   @Input() book: Book = {} as Book;
// @Output() bookEmitter = new EventEmitter<Book>();

// constructor(private cartService: CartService) {}

// ngOnInit(): void {}

// addToCart() {
//   this.cartService.add(this.book);
// this.bookEmitter.emit(this.book);
//   }
// }
