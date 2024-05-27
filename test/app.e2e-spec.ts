import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module'

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET /movies should return all movies', () => {
    return request(app.getHttpServer())
      .get('/movies')
      .expect(200)
      .expect((response) => {
        const movies = response.body;
        expect(movies).toBeDefined();
        expect(Array.isArray(movies)).toBe(true);
      });
  });

  it('GET /movies/locations should return movie locations', () => {
    return request(app.getHttpServer())
      .get('/movies/locations')
      .expect(200)
      .expect((response) => {
        const locations = response.body;
        expect(locations).toBeDefined();
        expect(Array.isArray(locations)).toBe(true);
      });
  }, 100000);
  

  it('GET /movies/search?query=Movie should return matching movie titles', () => {
    return request(app.getHttpServer())
      .get('/movies/search?query=Movie')
      .expect(200)
      .expect((response) => {
        const matchingTitles = response.body;
        expect(matchingTitles).toBeDefined();
        expect(Array.isArray(matchingTitles)).toBe(true);
      });
  });
});
