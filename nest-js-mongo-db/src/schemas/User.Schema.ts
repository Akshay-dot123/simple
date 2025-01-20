import * as mongoose from 'mongoose';
// import { userSettingSchema } from './User.settings.Schema';
export const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: false },
  settings: { type: mongoose.Schema.Types.ObjectId, ref: 'userSetting' },
});
export const User = mongoose.model('User', userSchema);
