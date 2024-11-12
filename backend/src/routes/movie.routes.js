const express = require("express");
const movieModel = require("../model/movie.model");
const chackDublicate = require("../moddelware/chackDublicate");

const movieRoutes = express.Router();

// get all movie
movieRoutes.get("/movies", async (req, res) => {
  const { title, rating, q, sortBy, page = 1, limit = 10, order } = req.query;
  const query = {};
  //for filter by title
  if (title) query.title = title;

  //   for filter by rating
  if (rating) query.rating = rating;

  // for search title
  if (q) query.title = new RegExp(q, "i");

  let orderBy;
  if(order === "asc"){
      orderBy = 1
  }
  if (order === "desc") {
    orderBy = -1;
  }
  const skip = (page - 1) * limit;

  try {
    const movies = await movieModel
      .find(query)
      .sort(sortBy ? { [sortBy]: orderBy } : {})
      .skip(skip)
      .limit(parseInt(limit));

    const totalResult = await movieModel.countDocuments(query);
    res.json({
      totalResult,
      page: parseInt(page),
      limit: parseInt(limit),
      totalPages: Math.ceil(totalResult / limit),
      data: movies,
    });
  } catch (error) {
    console.log(("Error while geting movie", error));
    res.status(500).json("internal server error");
  }
});

// get singal movie by id
movieRoutes.get("/movies/:movieID", async (req, res) => {
  const { movieID } = req.params;
  try {
    const movie = await movieModel.findById(movieID);
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.json(movie);
  } catch (error) {
    console.log(("Error while geting movie", error));
    res.status(500).json("internal server error");
  }
});

// add new movie
movieRoutes.post("/add-movie", chackDublicate, async (req, res) => {
  try {
    const newMovie = new movieModel(req.body);
    await newMovie.save();
    res.status(201).json("movie added success");
  } catch (error) {
    console.log(("Error while adding movie", error));
    res.status(500).json("internal server error");
  }
});

// update existing movie
movieRoutes.patch("/edit-movie/:movieID", async (req, res) => {
  try {
    const updatedMovie = await movieModel.findByIdAndUpdate(
      req.params.movieID,
      req.body,
      { new: true }
    );
    if (!updatedMovie)
      return res.status(404).json({ message: "Movie not found" });
    res
      .status(201)
      .json({ message: "Movie updated succes", updatedMovie: updatedMovie });
  } catch (error) {
    console.log("error while updating movie", error);
    res.status(500).json("Internal server error");
  }
});

// remove movie
movieRoutes.delete("/remove-movie/:movieID", async (req, res) => {
  const { movieID } = req.params;
  try {
    const movie = await movieModel.findByIdAndDelete({ _id: movieID });
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.json({ message: `movie id ${movieID} remove success` });
  } catch (error) {
    console.log("error while removing movie", error);
    res.status(500).json("Internal server error");
  }
});

module.exports = movieRoutes;
