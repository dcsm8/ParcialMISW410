import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreListComponent } from './genre-list/genre-list.component';
import { MovieModule } from "../movie/movie.module";

@NgModule({
    exports: [GenreListComponent],
    declarations: [GenreListComponent],
    imports: [
        CommonModule,
        MovieModule
    ]
})
export class GenreModule { }
