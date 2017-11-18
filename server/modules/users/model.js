import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minLength: [10, '10 characters long at least'],
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group',
  },
  eventDate: {
    type: Date,
  },
}, { timestamps: true });

export default mongoose.model('User', UserSchema);
