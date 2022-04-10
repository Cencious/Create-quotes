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

  get maxUpVote() {
    let upVotes = []
    for (const quote of this.allQuotes) {
      upVotes.push(quote.upVote)
    }
    return upVotes;
  }

  get topUpvote() {
    return Math.max(...this.maxUpVote)
  }

  get quotes() {
    return this.allQuotes;
  }

  addQuote(quote: string, author: string, owner: string, upVote: number = 0, downVote: number = 0) {
    this.allQuotes.unshift({
      quote,
      author,
      owner,
      upVote,
      downVote
    })
  }

  upvote(quote) {
    let index = this.allQuotes.indexOf(quote);
    this.allQuotes[index] = { ...this.allQuotes[index] };
    this.allQuotes[index].upVote += 1;
  }

  downvote(quote) {
    let index = this.allQuotes.indexOf(quote);
    this.allQuotes[index] = { ...this.allQuotes[index] };
    this.allQuotes[index].downVote += 1;
  }

  remove(quote) {
    this.allQuotes.splice(this.allQuotes.indexOf(quote), 1);
  }
}