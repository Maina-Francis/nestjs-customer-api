import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCustomerDTO } from 'src/customers/dto/createCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  // dependency injection
  constructor(private customersService: CustomersService) {}

  // Get all customers
  @Get()
  getAllCustomers() {
    return this.customersService.getAllCustomers();
  }

  // Get by id controller
  @Get(':id')
  getcustomer(@Param('id', ParseIntPipe) id: number) {
    // console.log(typeof id);

    const customer = this.customersService.findCustomerById(id);

    if (customer) {
      return customer;
    }
    throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
  }

  // Post controller
  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() createCustomerDTO: CreateCustomerDTO) {
    this.customersService.createCustomer(createCustomerDTO);
  }
}
