import mongoose from 'mongoose';
import uniqValidator from 'mongoose-unique-validator'

const userSchema = mongoose.Schema({
username: {type : String, required: true, unique: true},
email: {type : String, required: true, unique: true},
birthday: {type : Date, required: true},
password: {type : String, required: true, unique: true},
admin: {type : Boolean, required: true},
published_photos: {type : [String]},
liked_photos: {type : [String]},
subscribed_tags: {type : [String]},
creation_date: {type : Date, required: true}, 
});

userSchema.plugin(uniqValidator);

export default mongoose.model('user', userSchema);