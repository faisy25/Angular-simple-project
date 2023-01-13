import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BooksService) {}

  isShowing: boolean = true;

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }
}

/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
// import { Component, OnInit } from '@angular/core';
// import { Book } from '../types/Book';

// @Component({
//   selector: 'app-books',
//   templateUrl: './books.component.html',
//   styleUrls: ['./books.component.css'],
// })
// export class BooksComponent implements OnInit {
//   books: Book[] = [
//     {
//       name: 'clean code',
//       author: 'Robert C Martin',
//       image:
//         'https://m.media-amazon.com/images/I/515O2Bk8iVL._SX404_BO1,204,203,200_.jpg',
//       amount: 800,
//     },
//     {
//       name: 'programtic programmer',
//       author: 'David Thomas',
//       image:
//         'https://m.media-amazon.com/images/I/51yaxPX4BFL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
//       amount: 700,
//     },
//     {
//       name: 'clean code',
//       author: 'Robert C Martin',
//       image:
//         'https://m.media-amazon.com/images/I/515O2Bk8iVL._SX404_BO1,204,203,200_.jpg',
//       amount: 800,
//     },
//     {
//       name: 'programtic programmer',
//       author: 'David Thomas',
//       image:
//         'https://m.media-amazon.com/images/I/51yaxPX4BFL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
//       amount: 700,
//     },
//   ];

//   // name: string = 'Clean code';
//   // author: string = 'Robert C Martin';
//   // src: string =
//   //   'https://m.media-amazon.com/images/I/515O2Bk8iVL._SX404_BO1,204,203,200_.jpg';

//   // name2: string = 'Programtic programmer';
//   // author2: string = 'David Thomas';
//   // src2: string =
//   //   'https://m.media-amazon.com/images/I/51yaxPX4BFL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg';

//   // because of ngmodel function is not needed
//   // handleInput(e: any) {
//   //   this.myName = e.target.value;
//   // }

//   cart: Book[] = [];

//   isShowing: boolean = true;
//   // toggleBooks() {
//   //   this.isShowing = !this.isShowing;
//   // }

//   constructor() {}

//   ngOnInit(): void {}

//   addToCart(book: Book) {
//     console.log(book);
//   }
// }
