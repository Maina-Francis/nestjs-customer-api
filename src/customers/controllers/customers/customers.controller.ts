import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  // dependency injection
  constructor(private customersService: CustomersService) {}

  // Get controller
  @Get(':id')
  getcustomer(@Param('id', ParseIntPipe) id: number) {
    // console.log(typeof id);

    const customer = this.customersService.findCustomerById(id);

    if (customer) {
      return customer;
    }
    throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
  }
}
