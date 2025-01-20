import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from '../schemas/User.Schema'; // Import your schema
import { UserService } from './users.service';
import { UsersController } from './users.controllers';
import { userSettingSchema } from 'src/schemas/User.settings.Schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: userSchema },
      { name: 'UserSettings', schema: userSettingSchema },
    ]), // Register userSchema with the 'User' collection
  ],
  providers: [UserService],
  controllers: [UsersController],
})
export class UserModule {}
