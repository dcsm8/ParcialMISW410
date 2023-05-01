import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ActorService } from './actor.service';
import { environment } from 'src/environments/environment';
import { ActorDetail } from './actorDetail';
import { Actor } from './actor';

describe('ActorService', () => {
  let service: ActorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ActorService],
    });

    service = TestBed.inject(ActorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get actors', () => {
    const mockActors: ActorDetail[] = [
      {
        id: 1,
        name: 'Actor One',
      },
      {
        id: 2,
        name: 'Actor Two',
      },
    ] as ActorDetail[];

    service.getActors().subscribe((actors) => {
      expect(actors.length).toBe(2);
      expect(actors).toEqual(mockActors);
    });

    const req = httpMock.expectOne(`${environment.baseUrl}actors`);
    expect(req.request.method).toBe('GET');
    req.flush(mockActors);
  });

  it('should select an actor and update selectedActor$', (done) => {
    const mockActor: Actor = {
      id: 1,
      name: 'Actor One',
    } as Actor;

    service.selectActor(mockActor);

    service.selectedActor$.subscribe((actor) => {
      expect(actor).toEqual(mockActor);
      done();
    });
  });

  it('should clear the selected actor', (done) => {
    service.clearSelectedActor();

    service.selectedActor$.subscribe((actor) => {
      expect(actor).toBeNull();
      done();
    });
  });
});
