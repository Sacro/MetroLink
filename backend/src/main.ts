import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from 'app/config/config.service';
import { GraphqlConfigService } from 'app/graphql/graphql.config.service';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const graphqlConfigService = app.get(GraphqlConfigService);
  graphqlConfigService.setContainer(app);

  const config: ConfigService = app.get('ConfigService');

  await app
    .enableCors()
    .useGlobalPipes(
      new ValidationPipe({
        disableErrorMessages: config.isProdEnvironment,
        transform: true,
        whitelist: true,
      }),
    )
    .listen(config.port);
}
bootstrap();
