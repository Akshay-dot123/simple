import * as mongoose from 'mongoose';

export const userSettingSchema = new mongoose.Schema({
  receiveEmail: { type: Boolean },
  receiveNotification: { type: Boolean },
});
export const UserSetting = mongoose.model('UserSetting', userSettingSchema);
