import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCustomerDTO {
  @IsEmail()
  email: string;

  @IsNumber()
  id: number;

  @IsNotEmpty()
  name: string;
}
