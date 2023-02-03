import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./enities/User.entity";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { ShoppingService } from "./shopping.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  providers: [UsersService, ShoppingService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}