import {
  BadRequestException,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly usersService: UsersService,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getUsers() {
    return this.usersService.getUser();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('username/:username')
  getUserByUsername(@Param('username') username: string) {
    const user = this.usersService.getUserByUsername(username);
    if (user) return new SerializedUser(user);
    else throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('id/:id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    // console.log(typeof id);
    const user = this.usersService.getUserById(id);
    if (user) return new SerializedUser(user);
    else
      throw new BadRequestException(
        "The user with that particular id wasn't found",
      );
  }
}
