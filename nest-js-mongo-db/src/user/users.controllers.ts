import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { createUserDto } from './dto/CreateUser.dto';
import { UserService } from './users.service';
import mongoose from 'mongoose';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}
  @Post()
  createUser(@Body() createUserDto: createUserDto) {
    return this.userService.createUser(createUserDto);
  }
  @Get()
  getUser() {
    return this.userService.getUsers();
  }
  @Get(':id')
  getUserId(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('User Not Found', 404);
    const user = this.userService.getUserId(id);
    return user;
  }
  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() createUserDto: createUserDto) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('User Not Found', 404);
    const updatedUser = this.userService.updateUser(id, createUserDto);
    return updatedUser;
  }
  @Delete(':id')
  async DeletedUser(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('User Not Found', 404);
    const user = await this.userService.DeleteUserId(id);
    if (!user) throw new HttpException('User Not Found', 404);
    return 'User Deleted Successfully';
  }
}
