import { Injectable } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import { compare, hash } from "bcrypt";
import { RegisterDto } from "./dto/register.dto";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.usersService.getByEmail(email);

    if (!user) throw new Error('Пользователь с таким email не зарегистрирован');

    const { password: passwordHash } = await this.usersService.getPassword(email);

    const isCorrect = await compare(password, passwordHash);
    if (!isCorrect) throw new Error('Неверный пароль');


    return {
      token: await this.jwtService.signAsync({ id: user.id }),
    }
  }

  async register({ email, password }: RegisterDto) {
    const user = await this.usersService.getByEmail(email);
    if (user) throw new Error('Пользователь с таким email уже зарегистрирован');

    const newUser = this.usersService.create({ email, password });
    newUser.password = await hash(password, 10);

    await this.usersService.save(newUser);
  }
}
