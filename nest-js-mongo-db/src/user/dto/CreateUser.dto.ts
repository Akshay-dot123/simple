import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
export class createUserSettingsDto {
  @IsBoolean()
  @IsNotEmpty()
  @IsOptional()
  receiveEmail: boolean;
  @IsBoolean()
  @IsNotEmpty()
  receiveNotification: boolean;
}
export class createUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  age: number;
  @IsOptional()
  @ValidateNested() // Will not throw error if we dont use this
  @Type(() => createUserSettingsDto)
  settings?: createUserSettingsDto;
}
