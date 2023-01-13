import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        name: 'clean code',
        author: 'Robert C Martin',
        image:
          'https://m.media-amazon.com/images/I/515O2Bk8iVL._SX404_BO1,204,203,200_.jpg',
        amount: 800,
      },
      {
        name: 'programtic programmer',
        author: 'David Thomas',
        image:
          'https://m.media-amazon.com/images/I/51yaxPX4BFL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
        amount: 700,
      },
      {
        name: 'clean code',
        author: 'Robert C Martin',
        image:
          'https://m.media-amazon.com/images/I/515O2Bk8iVL._SX404_BO1,204,203,200_.jpg',
        amount: 800,
      },
      {
        name: 'programtic programmer',
        author: 'David Thomas',
        image:
          'https://m.media-amazon.com/images/I/51yaxPX4BFL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
        amount: 700,
      },
    ];
  }
}
