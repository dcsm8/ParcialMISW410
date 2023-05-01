import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { GenreService } from './genre.service';
import { Genre } from './genre';
import { faker } from '@faker-js/faker';
import { environment } from 'src/environments/environment';

describe('GenreService', () => {
  let service: GenreService;
  let httpMock: HttpTestingController;
  let mockGenres: Genre[] = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GenreService],
    });

    for (let index = 0; index < 10; index++) {
      mockGenres.push(new Genre(faker.datatype.uuid(), faker.lorem.word(), []));
    }

    service = TestBed.inject(GenreService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('getGenres', () => {
    it('should return a list of genres', () => {
      const mockGenres: Genre[] = [
        { id: '1', type: 'Action' },
        { id: '2', type: 'Adventure' },
      ] as Genre[];

      service.getGenres().subscribe((genres) => {
        expect(genres).toEqual(mockGenres);
      });

      const req = httpMock.expectOne(`${environment.baseUrl}genres`);
      expect(req.request.method).toBe('GET');
      req.flush(mockGenres);
    });
  });

  describe('getGenre', () => {
    it('should return a specific genre', () => {
      const mockGenre: Genre = { id: '1', type: 'Action' } as Genre;

      service.getGenre(mockGenre.id).subscribe((genre) => {
        expect(genre).toEqual(mockGenre);
      });

      const req = httpMock.expectOne(
        `${environment.baseUrl}genres/${mockGenre.id}`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockGenre);
    });
  });

  describe('selectGenre and clearSelectedGenre', () => {
    it('should set and clear the selected genre', (done) => {
      const mockGenre: Genre = { id: '1', type: 'Action' } as Genre;

      service.selectedGenre$.subscribe((selectedGenre) => {
        if (selectedGenre === mockGenre) {
          service.clearSelectedGenre();
        } else {
          expect(selectedGenre).toBeNull();
          done();
        }
      });

      service.selectGenre(mockGenre);
    });
  });
});
