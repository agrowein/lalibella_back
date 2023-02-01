import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import ormConfig from "./config/orm.config";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: ormConfig,
    }),
  ],
})
export class AppModule {}
