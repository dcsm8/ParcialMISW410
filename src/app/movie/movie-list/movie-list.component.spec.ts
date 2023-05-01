import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { faker } from '@faker-js/faker';
import { MovieListComponent } from './movie-list.component';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { Genre } from 'src/app/genre/genre';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [MovieListComponent, MovieDetailComponent],
      providers: [MovieService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 12; i++) {
      const movie = new Movie(
        faker.datatype.uuid(),
        faker.lorem.words(3),
        faker.image.imageUrl(),
        faker.datatype.number({ min: 60, max: 180, precision: 1 }),
        faker.address.country(),
        faker.date.past(),
        faker.datatype.number({ min: 1, max: 10, precision: 0.1 }),
        [],
        new Genre(faker.datatype.uuid(), faker.lorem.word(), []),
        {
          id: faker.datatype.uuid(),
          name: faker.lorem.words(3),
          photo: faker.image.imageUrl(),
          nationality: faker.address.country(),
          birthDate: faker.date.past(),
          biography: faker.lorem.paragraph(),
        },
        [
          {
            id: faker.datatype.uuid(),
            text: faker.lorem.paragraph(),
            score: faker.datatype.number({ min: 1, max: 5, precision: 0.1 }),
            creator: faker.internet.userName(),
          },
        ],
        {
          id: faker.datatype.uuid(),
          name: faker.lorem.words(3),
          url: faker.internet.url(),
          duration: faker.datatype.number({ min: 60, max: 180, precision: 1 }),
          channel: faker.company.name(),
        },
        []
      );

      component.movies.push(movie);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a spinner while movies are being loaded', () => {
    component.isLoading = true;
    fixture.detectChanges();
    expect(debug.query(By.css('.spinner-border'))).toBeTruthy();
  });

  it('should render movie cards after movies have been loaded', () => {
    component.isLoading = false;
    fixture.detectChanges();
    expect(debug.query(By.css('.spinner-border'))).toBeFalsy();
    expect(debug.queryAll(By.css('div.card'))).toHaveSize(12);
  });

  it('should set selected movie and update CSS classes', () => {
    const movie = component.movies[0];
    component.onSelected(movie);
    expect(component.selected).toBeTrue();
    expect(component.selectedMovie).toBe(movie);
    expect(component.cardColumnClasses).toBe('col-12 col-md-6');
  });
});
