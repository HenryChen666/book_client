import { Pipe, PipeTransform } from '@angular/core';
import {Author, Book} from '../books/model/book';

@Pipe({
  name: 'booknames'
})
export class BooknamesPipe implements PipeTransform {

  transform(value: Book[]): string {
    return value.map((book) => `${book.title}`).join(' <b>and</b> ');
  }

}
