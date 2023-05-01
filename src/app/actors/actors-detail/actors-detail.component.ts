import { Component, Input } from '@angular/core';
import { ActorDetail } from '../actorDetail';

@Component({
  selector: 'app-actors-detail',
  templateUrl: './actors-detail.component.html',
  styleUrls: ['./actors-detail.component.css'],
})
export class ActorsDetailComponent {
  @Input() actorsDetail!: ActorDetail;

  constructor() {}
}
