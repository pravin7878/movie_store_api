const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      type: String,
      required: true,
      trim: true,
    },
    release_date: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 10,
      required: true,
    },
    duration: {
      type: Number, // Duration in minutes
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    director: {
      type: String,
      trim: true,
    },
    cast: [
      {
        type: String,
        trim: true,
      },
    ],
    posterUrl: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const movieModel = mongoose.model("Movie", movieSchema);

module.exports = movieModel;
