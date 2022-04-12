import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  @Input() quote: Quote;
  @Output() upvote = new EventEmitter<Quote>();
  @Output() downvote = new EventEmitter<Quote>();
  @Output() remove = new EventEmitter<Quote>();

  title = 'Welcome and enjoy the quotes';

}
