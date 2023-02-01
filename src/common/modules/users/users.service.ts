import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./enities/User.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) {}

  async save(user: User) {
    return await this.usersRepository.save(user);
  }

  create(data: CreateUserDto) {
    return this.usersRepository.create(data);
  }

  async getPassword(email: string): Promise<User> {
    return await this.usersRepository.findOne({
      where: { email },
      select: { password: true },
    });
  }

  async getByEmail(email: string): Promise<User> {
    return await this.usersRepository.findOne({
      where: { email },
    });
  }

  async getAll() {
    return await this.usersRepository.find();
  }
}