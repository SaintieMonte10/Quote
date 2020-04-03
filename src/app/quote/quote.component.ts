import { Component, OnInit } from '@angular/core';
import {Quote } from '../quote';

@Component({
  selector:'app-quote',
  templateUrl:'./quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Opportunity','If window of opportunity appears dont pull down the shade.',"Mercy",new Date(2019,1,14)),
    new Quote(2,'Technology','Its still magic even if you know how its done',"Albert",new Date(2020,1,9)),
    new Quote(3,'Hardwork','Hardwork is the most important key to success without being willing to work hard and put everything into venture,business seccess is nearly impossible.',"Khloe",new Date(2019,6,9)),
    new Quote(4,'Friendship','A real friend is the one who walks in when the rest walk out',"Whitney",new Date(2020,2,18)),
    new Quote(5,'Love','Love is a canvas furnished by nature and embroidered',"Gregory",new Date(2030,3,14)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
   completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.now= new Date(quote.now);
    this.quotes.push(quote)
  }

  numberoflikes : number=0
  numberofdislikes : number=0
  likebuttonclick(){
    this.numberoflikes++;
  }
  dislikebuttonclick(){
    this.numberofdislikes++;
  }
  constructor() { }

  ngOnInit() {
  }

}