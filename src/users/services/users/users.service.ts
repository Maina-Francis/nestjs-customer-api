import { Injectable } from '@nestjs/common';
import { User } from 'src/users/types/user';

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
    return this.users;
  }

  getUserByUsername(username) {
    return this.users.find((user) => user.username === username);
  }
}
