import { Component } from '@angular/core';
import { GenreService } from './genre/genre.service';
import { ActorService } from './actors/actor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showMovies = true;
  showActors = false;

  constructor(
    private genreService: GenreService,
    private actorService: ActorService
  ) {
    this.actorService.selectedActor$.subscribe(() => {
      this.showMovies = false;
      this.showActors = true;
    });

    this.genreService.selectedGenre$.subscribe(() => {
      this.showMovies = true;
      this.showActors = false;
    });
  }
}
