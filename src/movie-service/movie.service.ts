import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import { GeolocationService } from '../geolocation/geolocation.service';

export interface Movie {
  title: string;
  release_year: string;
  locations: string;
  production_company: string;
  distributor: string;
  director: string;
  writer: string;
  actor_1: string;
  actor_2: string;
  actor_3: string;
}

@Injectable()
export class MovieService {
  private readonly apiUrl = 'https://data.sfgov.org/resource/yitu-d5am.json';

  constructor(private readonly geolocationService: GeolocationService) {}

  async getMovies(): Promise<Movie[]> {
    try {
      const response = await axios.get<Movie[]>(this.apiUrl);
      return response.data;
    } catch (error) {
      throw new Error('Unable to fetch movies.');
    }
  }

  async searchMovies(query: string): Promise<string[]> {
    const movies = await this.getMovies();
    const matchingTitles = movies
      .filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase()),
      )
      .map((movie) => movie.title);

    return matchingTitles;
  }

  async getMovieLocations(): Promise<
  { title: string; location: { lat: number; lng: number } }[]
> {
  const movies = await this.getMovies();
  const movieLocations = await Promise.all(
    movies.map(async (movie) => {
      const location = await this.geolocationService.forwardGeocoding(
        movie.locations,
      );
      return { title: movie.title, location };
    })
  );
  return movieLocations;
}

}
