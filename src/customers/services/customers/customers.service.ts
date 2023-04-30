import { Injectable } from '@nestjs/common';
import { CreateCustomerDTO } from 'src/customers/dto/createCustomer.dto';
import { Customer } from 'src/customers/types/customer';

@Injectable()
export class CustomersService {
  // Sample users array
  private customers: Customer[] = [
    {
      id: 1,
      email: 'test@example.com',
      name: 'Test',
    },
    {
      id: 2,
      email: 'user@example.com',
      name: 'User',
    },
    {
      id: 3,
      email: 'sample@example.com',
      name: 'Sample',
    },
  ];

  // Get all customers
  getAllCustomers() {
    return this.customers;
  }

  //   Find customer by id
  findCustomerById(id: number) {
    return this.customers.find((customer) => customer.id === id);
  }

  //   create customer for Post req
  createCustomer(customerDto: CreateCustomerDTO) {
    this.customers.push(customerDto);
  }
}
