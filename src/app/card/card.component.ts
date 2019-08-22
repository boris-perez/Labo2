import {Component, Input, OnInit} from '@angular/core';
import {CardService} from './card.service';

@Component({
  selector: 'todo-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() listCards;

  constructor(private cardService: CardService) {
  }

  ngOnInit() {
  }

}
