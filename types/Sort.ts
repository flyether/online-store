/* eslint-disable import/no-cycle *//* eslint-disable default-case *//* eslint-disable linebreak-style */
import { FilterObject } from './interfaces';

class FairyCardsSort {
  cardArray: FilterObject[];

  constructor(cardArray: FilterObject[]) {
    this.cardArray = cardArray;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  sortAtoZ() {
    return this.cardArray.sort((a, b) => {
      if (a.name! > b.name!) {
        return 1;
      }
      if (a.name! < b.name!) {
        return -1;
      }
      return 0;
    });
  }

  sortZtoA() {
    return this.cardArray.sort((a, b) => {
      if (a.name! > b.name!) {
        return -1;
      }
      if (a.name! < b.name!) {
        return 1;
      }
      return 0;
    });
  }

  sortManaMax() {
    return this.cardArray.sort((a, b) => +a.mana! - +b.mana!);
  }

  sortManaMin(): FilterObject[] {
    return this.cardArray.sort((a, b) => +b.mana! - +a.mana!);
  }
}

export { FairyCardsSort };
