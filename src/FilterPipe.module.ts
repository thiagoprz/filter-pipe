import { NgModule } from '@angular/core';
import { FilterPipe } from './FilterPipe';

@NgModule({
  declarations: [
    FilterPipe,
  ],
  exports: [
    FilterPipe
  ]
})
export class FilterPipeModule {}
