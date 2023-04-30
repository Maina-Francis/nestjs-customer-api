import { Controller, Get } from '@nestjs/common';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  // Get controller
  @Get()
  getcustomer() {
    return {
      id: 1,
      email: 'test@gmail.com',
      createdAt: new Date(),
    };
  }
}
