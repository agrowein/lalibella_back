import { Injectable } from "@nestjs/common";
import { UsersService } from "./users.service";

@Injectable()
export class ShoppingService {
  constructor(
    private usersService: UsersService,
  ) {}
}