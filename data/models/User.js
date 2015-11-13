import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  team_name: {
    type: String,
  },
  is_active: {
    type: Boolean,
  },
});

const User = mongoose.model('User', UserSchema);

export default User;
