import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private contentCard: any[];
  private cantCard: number;

  constructor() {
    this.cantCard = 20;
    this.contentCard = [];
    this.fillContentCard();
  }

  get getContentCard(): any[] {
    return this.contentCard;
  }

  set setContentCard(value: any[]) {
    this.contentCard = value;
  }

  public fillContentCard(): void {
    for (let i = 0; i < this.cantCard; i++) {
      this.contentCard.push({
        index: `${i + 1}`
      });
    }
  }

}
