const mongoose = require("mongoose")
const Schema = mongoose.Schema

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
    //TODO: figure out the rest of these entry dataTypes later
    gender: {
      type: String,
    },
    smoke: {
      type: String
    },
    drink: {
      type: String
    },
    religion: {
      type: String
    },
    language: {
      type: String
    }
  });

  module.exports = User = mongoose.model("users", UserSchema) 