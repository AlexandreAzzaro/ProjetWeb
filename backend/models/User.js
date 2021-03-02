import mongoose from 'mongoose';
import uniqValidator from 'mongoose-unique-validator'

const userSchema = mongoose.Schema({
email: {type : String, required: true, unique: true},
password: {type : String, required: true}
});

userSchema.plugin(uniqValidator);

export default mongoose.model('user', userSchema);