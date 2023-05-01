import { Component, OnInit } from '@angular/core';
import { ActorService } from '../actor.service';
import { ActorDetail } from '../actorDetail';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.css'],
})
export class ActorsListComponent implements OnInit {
  actors: Array<ActorDetail> = [];
  isLoading = true;
  selectedActor!: ActorDetail;
  selected = false;
  cardColumnClasses = 'col-12 col-md-6 col-lg-4';

  constructor(private actorService: ActorService) {}

  ngOnInit() {
    this.getActors();
  }

  getActors(): void {
    this.isLoading = true;
    this.actorService.getActors().subscribe((actors) => {
      actors.sort((a, b) => {
        let typeA = a.name.toLowerCase();
        let typeB = b.name.toLowerCase();
        return typeA < typeB ? -1 : typeA > typeB ? 1 : 0;
      });
      this.actors = actors;
      this.isLoading = false;
    });
  }

  onSelected(actor: ActorDetail): void {
    this.selected = true;
    this.selectedActor = actor;
    this.actorService.selectActor(actor);
    this.cardColumnClasses = 'col-12 col-md-6';
  }
}
