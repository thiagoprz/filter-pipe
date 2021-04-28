import { Injectable, Pipe } from '@angular/core';
@Pipe({
  name: 'filter'
})
@Injectable()
export class FilterPipe  {

  constructor() {}

  /**
   *
   * @param items Items collection
   * @param any field The field to be validated
   * @param value
   */
  transform(items: any[], field : string, value : any): any[] {
    if (!items) return [];
    if (!value || value.length == 0) return items;
    return items.filter((it) => {
      const itemValue = typeof it[field] == 'string' ? it[field].toLowerCase() : it[field];
      const filterValue = typeof value == 'string' ? value.toLowerCase() : value;
      if (filterValue.indexOf('!=') != -1) {
        return itemValue != filterValue.replace('!=', '');
      }
      return itemValue == filterValue;
    });
  }
}
