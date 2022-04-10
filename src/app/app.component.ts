import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allQuotes = [
    {
      quote: "quote 1",
      author: "person1",
      owner: "person2",
      upVote: 0,
      downVote: 0
    },
    {
      quote: "quote 2",
      author: "name",
      owner: "name",
      upVote: 0,
      downVote: 0
    }
  ]

  title = 'Create-quote';

  get quotes() {
    return this.allQuotes;
  }

