import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MovieService } from './movie.service';
import { Movie } from './movie';

describe('MovieService', () => {
  let service: MovieService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });

    service = TestBed.inject(MovieService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get movies and sort them by popularity', () => {
    const mockMovies: Movie[] = [
      { id: '1', title: 'Movie 1', popularity: 5 },
      { id: '2', title: 'Movie 2', popularity: 10 },
      { id: '3', title: 'Movie 3', popularity: 1 },
    ] as Movie[];

    service.getMovies().subscribe((movies) => {
      expect(movies.length).toBe(3);
      expect(movies[0].popularity).toBe(10);
      expect(movies[1].popularity).toBe(5);
      expect(movies[2].popularity).toBe(1);
    });

    const req = httpTestingController.expectOne(service['apiUrl']);
    expect(req.request.method).toEqual('GET');
    req.flush(mockMovies);
  });

  it('should get a single movie by id', () => {
    const mockMovie: Movie = {
      id: '1',
      title: 'Movie 1',
      popularity: 5,
    } as Movie;

    service.getMovie('1').subscribe((movie) => {
      expect(movie).toEqual(mockMovie);
    });

    const req = httpTestingController.expectOne(service['apiUrl'] + '/1');
    expect(req.request.method).toEqual('GET');
    req.flush(mockMovie);
  });
});
