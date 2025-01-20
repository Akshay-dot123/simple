import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/users.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://akshaytest234:75hiWCRmMDb31dgx@cluster0.usgz9.mongodb.net/Nest',
    ),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
