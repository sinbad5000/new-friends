const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    //TODO: configure dataTypes and more entries if necessary
    name: {
      type: String,
    },
  });

  module.exports = Category = mongoose.model("categories", CategorySchema) 