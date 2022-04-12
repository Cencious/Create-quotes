import { Quote } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuotedetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Output() upvote = new EventEmitter<Quote>();
  @Output() downvote = new EventEmitter<Quote>();
  @Output() remove = new EventEmitter<Quote>();


  constructor() { }

  ngOnInit(): void {
  }

}
