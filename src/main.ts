import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
require('dotenv').config();

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule); 


    app.enableCors({
        origin: '*',
    });

    const options = new DocumentBuilder()
        .setTitle('SF Movies API')
        .setDescription('API to fetch and search movie locations in San Francisco')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

    app.setBaseViewsDir(join(__dirname, '..', 'view'));

    app.setViewEngine('ejs');

    await app.listen(3000);

}
bootstrap(); 

