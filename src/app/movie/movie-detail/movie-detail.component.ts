import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  @Input() movieDetail!: Movie;
  movie!: Movie;
  isLoading = false;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    if (this.movieDetail && this.movieDetail.id) {
      this.getMovie(this.movieDetail.id);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.movieDetail && changes.movieDetail.currentValue) {
      this.getMovie(changes.movieDetail.currentValue.id);
    }
  }

  getMovie(movieId: string): void {
    this.isLoading = true;
    this.movieService.getMovie(movieId).subscribe((movie) => {
      this.movie = movie;
      this.isLoading = false;
    });
  }
}
