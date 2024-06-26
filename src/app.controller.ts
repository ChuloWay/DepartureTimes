import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly accessToken = process.env.MAP_BOX_API_KEY;
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get('/home')
  @Render('index')
  getHome() {
    return { mapboxAccessToken: this.accessToken };
  }
}
