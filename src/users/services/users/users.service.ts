import { Injectable } from '@nestjs/common';
import { User, SerializedUser } from 'src/users/types/index';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'Francis',
      password: '12345',
    },
    {
      id: 2,

      username: 'Maina',
      password: 'maina',
    },
    {
      id: 3,

      username: 'Denis',
      password: 'denis',
    },
  ];

  getUser() {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username) {
    return this.users.find((user) => user.username === username);
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
