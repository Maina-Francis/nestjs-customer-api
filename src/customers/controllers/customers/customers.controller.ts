import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  // Get request
  @Get()
  getCustomer() {
    return {
      id: 1,
      email: 'customer@gmail.com',
      createdAt: new Date(),
    };
  }
}
