import { Component, OnInit } from '@angular/core';
import { Genre } from '../genre';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css'],
})
export class GenreListComponent implements OnInit {
  genres: Array<Genre> = [];

  constructor(private genreService: GenreService) {}

  ngOnInit() {
    this.getGenres();
  }

  getGenres(): void {
    this.genreService.getGenres().subscribe((genres) => {
      genres.sort((a, b) => {
        let typeA = a.type.toLowerCase();
        let typeB = b.type.toLowerCase();
        return typeA < typeB ? -1 : typeA > typeB ? 1 : 0;
      });
      this.genres = genres;
    });
  }

  onGenreSelected(genre: Genre) {
    this.genreService.selectGenre(genre);
  }
}
