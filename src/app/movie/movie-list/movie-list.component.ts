import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { GenreService } from 'src/app/genre/genre.service';
import { Genre } from 'src/app/genre/genre';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: Array<Movie> = [];
  selectedGenre: Genre | null = null;
  isLoading = true;
  selected = false;
  cardColumnClasses = 'col-12 col-md-6 col-lg-4';
  selectedMovie!: Movie;

  constructor(
    private movieService: MovieService,
    private genreService: GenreService
  ) {
    this.genreService.selectedGenre$.subscribe((genre) => {
      this.selectedGenre = genre;
      this.getMovies();
    });
  }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.isLoading = true;
    this.movieService.getMovies().subscribe((movies) => {
      if (this.selectedGenre) {
        // If a genre is selected, filter the movies by genre
        this.movies = movies.filter(
          (movie) => movie.genre.type === this.selectedGenre?.type
        );
      } else {
        // If no genre is selected, show all movies
        this.movies = movies;
      }
      this.isLoading = false;
    });
  }

  onSelected(movie: Movie): void {
    this.selected = true;
    this.selectedMovie = movie;
    this.cardColumnClasses = 'col-12 col-md-6';
  }
}
