import {Component, OnInit} from '@angular/core';
import {CardService} from './card/card.service';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-app';
  public listCards: any[];
  constructor(private cardServices: CardService) {
    this.listCards = [];
  }
  ngOnInit() {
    this.addContentCard();
  }
  public addContentCard(): void {
    this.listCards = this.cardServices.getContentCard;
  }
}
