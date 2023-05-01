import { Actor } from "./actor";
import { Movie } from '../movie/movie';

export class ActorDetail extends Actor{

  nationality: string;
  birthDate: string;
  biography: string;
  movies: Movie[] = [];

  constructor(
    id: number,
    name: string,
    photo: string,
    nationality: string,
    birthDate: string,
    biography: string,
    movies: Array<Movie>
  ) {
    super(id, name, photo)
    this.nationality = nationality;
    this.birthDate = birthDate;
    this.biography = biography;
    this.movies = movies;
  }
}
