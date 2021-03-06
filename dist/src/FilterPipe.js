var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, Pipe } from '@angular/core';
let FilterPipe = class FilterPipe {
    constructor() { }
    /**
     *
     * @param items Items collection
     * @param any field The field to be validated
     * @param value
     */
    transform(items, field, value) {
        if (!items)
            return [];
        if (!value || value.length == 0)
            return items;
        return items.filter((it) => {
            if (value.indexOf('!=') != -1) {
                return it[field] != value.replace('!=', '');
            }
            return it[field] == value;
        });
    }
};
FilterPipe = __decorate([
    Pipe({
        name: 'filter'
    }),
    Injectable(),
    __metadata("design:paramtypes", [])
], FilterPipe);
export { FilterPipe };
//# sourceMappingURL=FilterPipe.js.map