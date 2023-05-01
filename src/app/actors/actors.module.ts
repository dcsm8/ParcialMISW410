import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActorsListComponent} from './actors-list/actors-list.component'
import { ActorsDetailComponent } from './actors-detail/actors-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ActorsListComponent],
  declarations: [ActorsListComponent, ActorsDetailComponent]
})
export class ActorsModule { }
