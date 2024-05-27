import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { GeolocationModule } from '../geolocation/geolocation.module';


@Module({
  imports: [GeolocationModule],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieServiceModule {}
