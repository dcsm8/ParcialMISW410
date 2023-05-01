import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenreListComponent } from './genre-list.component';
import { GenreService } from '../genre.service';
import { of } from 'rxjs';
import { Genre } from '../genre';

class MockGenreService {
  getGenres() {
    return of([
      { id: 1, type: 'Action' },
      { id: 2, type: 'Adventure' },
      { id: 3, type: 'Comedy' },
    ]);
  }

  selectGenre(genre: Genre) {}
}

describe('GenreListComponent', () => {
  let component: GenreListComponent;
  let fixture: ComponentFixture<GenreListComponent>;
  let genreService: GenreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenreListComponent],
      providers: [{ provide: GenreService, useClass: MockGenreService }],
    }).compileComponents();

    fixture = TestBed.createComponent(GenreListComponent);
    component = fixture.componentInstance;
    genreService = TestBed.inject(GenreService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getGenres on ngOnInit', () => {
    spyOn(component, 'getGenres');
    component.ngOnInit();
    expect(component.getGenres).toHaveBeenCalled();
  });

  it('should populate genres after ngOnInit', () => {
    component.ngOnInit();
    expect(component.genres.length).toBe(3);
  });

  it('should sort genres alphabetically', () => {
    component.ngOnInit();
    expect(component.genres[0].type).toBe('Action');
    expect(component.genres[1].type).toBe('Adventure');
    expect(component.genres[2].type).toBe('Comedy');
  });

  it('should call onGenreSelected with correct genre', () => {
    spyOn(component, 'onGenreSelected');
    const testGenre: Genre = { id: '1', type: 'Action', movies: [] };
    component.onGenreSelected(testGenre);
    expect(component.onGenreSelected).toHaveBeenCalledWith(testGenre);
  });

  it('should call selectGenre in GenreService when onGenreSelected is called', () => {
    spyOn(genreService, 'selectGenre');
    const testGenre: Genre = { id: '1', type: 'Action', movies: [] };
    component.onGenreSelected(testGenre);
    expect(genreService.selectGenre).toHaveBeenCalledWith(testGenre);
  });
});
