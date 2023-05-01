import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { SimpleChange, SimpleChanges } from '@angular/core';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;
  let movieService: jasmine.SpyObj<MovieService>;

  beforeEach(async () => {
    const movieServiceSpy = jasmine.createSpyObj<MovieService>('MovieService', [
      'getMovie',
    ]);

    await TestBed.configureTestingModule({
      declarations: [MovieDetailComponent],
      providers: [{ provide: MovieService, useValue: movieServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    movieService = TestBed.inject(MovieService) as jasmine.SpyObj<MovieService>;
  });

  it('should call getMovie with movieDetail.id when ngOnInit is called and movieDetail.id is available', () => {
    spyOn(component, 'getMovie');
    const movieId = '1';
    component.movieDetail = { id: movieId, title: 'Test Movie' } as Movie;

    component.ngOnInit();

    expect(component.getMovie).toHaveBeenCalledWith(movieId);
  });

  it('should call getMovie with changes.movieDetail.currentValue.id when ngOnChanges is called with movieDetail changes', () => {
    spyOn(component, 'getMovie');
    const movieId = '2';
    const previousValue = null;
    const currentValue = {
      id: movieId,
      title: 'Another Test Movie',
    };
    const isFirstChange = true;
    const changes = {
      movieDetail: new SimpleChange(previousValue, currentValue, isFirstChange),
    };

    component.ngOnChanges(changes);

    expect(component.getMovie).toHaveBeenCalledWith(movieId);
  });
});
