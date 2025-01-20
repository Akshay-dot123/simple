import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createUserDto } from './dto/CreateUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private userModel: Model<any>,
    @InjectModel('UserSettings') private UserSettings: Model<any>,
  ) {}
  // createUser(createUserDto: createUserDto) {
  //   const user = new this.userModel(createUserDto);
  //   console.log('==============>', user);
  //   return user.save();
  // }

  async createUser({ settings, ...createUserDto }: createUserDto) {
    if (settings) {
      const newSettings = new this.UserSettings(settings);
      const savedSettings = await newSettings.save();
      const newUser = new this.userModel({
        ...createUserDto,
        settings: savedSettings._id,
      });
      console.log('==============>', newUser);
      return newUser.save();
    }
    const user = new this.userModel(createUserDto);
    console.log('==============>', user);
    return user.save();
  }
  getUsers() {
    return this.userModel.find().populate('settings');
  }
  getUserId(id: string) {
    return this.userModel.findById(id);
  }
  updateUser(id: string, createUserDto: createUserDto) {
    return this.userModel.findByIdAndUpdate(id, createUserDto, { new: true });
  }
  DeleteUserId(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
