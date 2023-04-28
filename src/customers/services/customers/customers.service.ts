import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  // Get Request Provider
  getAllCustomers() {
    return {
      id: 1,
      email: 'customer@gmail.com',
      createdAt: new Date(),
    };
  }
}
