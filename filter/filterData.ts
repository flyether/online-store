/* eslint-disable linebreak-style */

import { FilterObjectArr } from '../types/interfaces';

class FilterData {
  data: FilterObjectArr ;

  constructor(newData: FilterObjectArr) {
    this.data = newData;
  }

  save(): void {
    localStorage.setItem('filter', JSON.stringify(this.data));
  }

  load(): void {
    const data = localStorage.getItem('filter');
    if (data) {
      this.data = JSON.parse(data);
    }
  }
}

export { FilterData };
