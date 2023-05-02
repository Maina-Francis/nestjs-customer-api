import { Injectable } from '@nestjs/common';
import { User, SerializedUser } from 'src/users/types/index';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'Francis',
      password: '12345',
    },
    {
      username: 'Maina',
      password: 'maina',
    },
    {
      username: 'Denis',
      password: 'denis',
    },
  ];

  getUser() {
    return this.users.map((user) => plainToInstance(SerializedUser, user));
  }

  getUserByUsername(username) {
    return this.users.find((user) => user.username === username);
  }
}
