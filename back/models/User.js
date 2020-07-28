const mongoose = require("mongoose")
const Schema = mongoose.Schema
const friends = require("mongoose-friends")


const UserSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now
    },
    location: {
      type: String,
    default: ""
    },
    gender: {
      type: String,
    default: ""
    },
    languages: {
      type: String,
    default: ""
    },
    smoke: {
      type: String,
    default: ""
    },
    drink: {
      type: String,
    default: ""
    },
    religion: {
      type: String,
    default: ""
    },
    categories: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    }]
  });

UserSchema.plugin(friends())
module.exports = User = mongoose.model("users", UserSchema) 