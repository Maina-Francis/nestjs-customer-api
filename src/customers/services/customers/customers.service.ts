import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  // Sample users array
  private users = [
    {
      id: 1,
      email: 'test@example.com',
      createdAt: new Date(),
    },
    {
      id: 2,
      email: 'user@example.com',
      createdAt: new Date(),
    },
    {
      id: 3,
      email: 'sample@example.com',
      createdAt: new Date(),
    },
  ];

  findCustomerById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
