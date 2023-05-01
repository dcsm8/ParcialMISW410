import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActorDetail } from './actorDetail';
import { Actor } from './actor';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  private apiUrl: string = environment.baseUrl + 'actors';
  private selectedActorSource = new BehaviorSubject<Actor | null>(null);
  selectedActor$ = this.selectedActorSource.asObservable();

  constructor(private http: HttpClient) {}

  getActors(): Observable<ActorDetail[]> {
    return this.http.get<ActorDetail[]>(this.apiUrl);
  }

  selectActor(actor: Actor) {
    this.selectedActorSource.next(actor);
  }

  clearSelectedActor(): void {
    this.selectedActorSource.next(null);
  }
}
