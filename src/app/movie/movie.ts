import { Actor } from '../actors/actor';
import { Genre } from '../genre/genre';

export class Movie {
  id: string;
  title: string;
  poster: string;
  duration: number;
  country: string;
  releaseDate: Date;
  popularity: number;
  actors: Actor[];
  genre: Genre;
  director: {
    id: string;
    name: string;
    photo: string;
    nationality: string;
    birthDate: Date;
    biography: string;
  };
  reviews: {
    id: string;
    text: string;
    score: number;
    creator: string;
  }[];
  youtubeTrailer: {
    id: string;
    name: string;
    url: string;
    duration: number;
    channel: string;
  };
  platforms: {
    id: string;
    name: string;
    url: string;
  }[];

  constructor(
    id: string,
    title: string,
    poster: string,
    duration: number,
    country: string,
    releaseDate: Date,
    popularity: number,
    actors: Actor[],
    genre: Genre,
    director: {
      id: string;
      name: string;
      photo: string;
      nationality: string;
      birthDate: Date;
      biography: string;
    },
    reviews: {
      id: string;
      text: string;
      score: number;
      creator: string;
    }[],
    youtubeTrailer: {
      id: string;
      name: string;
      url: string;
      duration: number;
      channel: string;
    },
    platforms: {
      id: string;
      name: string;
      url: string;
    }[]
  ) {
    this.id = id;
    this.title = title;
    this.poster = poster;
    this.duration = duration;
    this.country = country;
    this.releaseDate = releaseDate;
    this.popularity = popularity;
    this.actors = actors;
    this.genre = genre;
    this.director = director;
    this.reviews = reviews;
    this.youtubeTrailer = youtubeTrailer;
    this.platforms = platforms;
  }
}
