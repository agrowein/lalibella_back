import { NestFactory } from '@nestjs/core';
import { AppModule } from './common/modules/app.module';

(async () =>  {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
})();
