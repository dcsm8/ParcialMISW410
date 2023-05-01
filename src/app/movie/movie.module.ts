import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  exports: [MovieListComponent],
  declarations: [MovieListComponent, MovieDetailComponent],
  imports: [CommonModule],
})
export class MovieModule {}