import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Genre } from './genre';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  private apiUrl: string = environment.baseUrl + 'genres';
  private selectedGenreSource = new BehaviorSubject<Genre | null>(null);
  selectedGenre$ = this.selectedGenreSource.asObservable();

  constructor(private http: HttpClient) {}

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.apiUrl);
  }

  selectGenre(genre: Genre) {
    this.selectedGenreSource.next(genre);
  }

  clearSelectedGenre(): void {
    this.selectedGenreSource.next(null);
  }

  getGenre(genreId: string): Observable<Genre> {
    return this.http.get<Genre>(this.apiUrl + '/' + genreId);
  }
}
