import { Controller, Get, Query } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async getAllMovies() {
    return await this.movieService.getMovies();
  }

  @Get('search')
  async searchMovies(@Query('query') query: string) {
    return await this.movieService.searchMovies(query);
  }

  @Get('locations')
  async getAllMovieLocations() {
    return await this.movieService.getMovieLocations();
  }
}
