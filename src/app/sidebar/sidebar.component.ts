import { Component } from '@angular/core';
import { GenreService } from '../genre/genre.service';
import { ActorService } from '../actors/actor.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(
    private genreService: GenreService,
    private actorService: ActorService
  ) {}

  clearGenre(): void {
    this.genreService.clearSelectedGenre();
  }

  showActors(): void {
    this.actorService.clearSelectedActor();
  }
}
