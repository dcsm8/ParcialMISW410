import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl: string = environment.baseUrl + 'movies';
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl).pipe(
      map((movies: Movie[]) => {
        return movies.sort((a, b) => b.popularity - a.popularity);
      })
    );
  }

  getMovie(movieId: string): Observable<Movie> {
    return this.http.get<Movie>(this.apiUrl + '/' + movieId);
  }
}
