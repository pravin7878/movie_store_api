# Movie Store API

This is a RESTful API for managing a movie store, allowing users to create, read, update, and delete movies. It includes additional functionality for filtering, sorting, searching, and pagination of movie data.

## Features

- **CRUD Operations**:
  - Create a new movie.
  - Get details of a movie by ID.
  - Update movie details.
  - Delete a movie.
  
- **GET Request Features**:
  - Filter movies by title.
  - Filter movies by rating.
  - Search for movies by partial title.
  - Sort movies by fields like title, rating, etc.
  - Pagination for limiting the number of results returned per request.

## Technologies

- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing movie data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.

## Prerequisites

To run this project, you need to have the following installed:

- Node.js (v14+ recommended)
- MongoDB (locally or use a cloud service like MongoDB Atlas)

## API Endpoints
#### 1. Create a Movie
- URL: `/add-movie`  
- Method: POST
- Request Body :
  - `{
  "title": "Inception",
  "genre": "Sci-Fi",
  "releaseYear": 2010,
  "rating": 8.8,
  "duration": 148,
  "description": "A mind-bending thriller",
  "director": "Christopher Nolan",
  "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
  "posterUrl": "https://example.com/inception-poster.jpg"
}`
- Response : 201 Created: The newly created movie object.

#### 2. Get All Movies
- URL: `/movies`  Method: GET
- Query Parameters:
  - title: Filter by movie title (exact match).
  - rating: Filter by movie rating.
  - q: Search movies by title (partial match).
  - sortBy: Sort by a field (e.g., rating, title).
  - page: Pagination - specify the page number.
  - limit: Pagination - specify the number of results per page.
- Response:
200 OK: List of movies matching the query parameters, along with pagination details.

#### 3. Get Movie by ID
- URL: `/movies/:movieID`    Method: GET
- Response:
  - 200 OK: The movie object.
  - 404 Not Found: If the movie is not found.

#### 4. Update a Movie
- URL: `/edit-movie/:movieID`
- Method: PUT
- Request Body:
  - `{
     "title": "Inception 2",
     "rating": 9.0
  }`
- Response:
  - 200 OK: Updated movie object.
  - 404 Not Found: If the movie is not found.  

#### 5. Delete a Movie
- URL: `/remove-movie/:movieID`
- Method: DELETE
- Response:
  - 200 OK: Message confirming movie deletion.
  - 404 Not Found: If the movie is not found.

#### 6. Filter Movies by Title
- URL: `/movies?title=<title>`
- Method: GET
- Query Parameter:
  - title: Filter movies by exact title match.
- Example:
  - GET `/movies?title=Inception`
- Response :
List of movies with the title "Inception".

#### 7. Search Movies by Partial Title (Case-insensitive)
- URL: `/movies?q=<partial-title>`
- Method: GET
- Query Parameter:
  - q: Search movies by partial title.
- Example:
- GET `/movies?q=dho`
- Response :
List of movies with "Dho" in their title (e.g., "Dhoom", "Dhoni: The Untold Story").

#### 8. Filter Movies by Rating
- URL: `/movies?rating=<rating>`
- Method: GET
- Query Parameter:
   - rating: Filter movies by exact rating.
- Example:
  - GET `/movies?rating=8.8`
- Response :
List of movies with rating 8.8.

#### 9. Sort Movies by Field (Title, Rating, etc.)
- URL: `/movies?sortBy=<field>`
- Method: GET
- Query Parameter:
  - sortBy: Field to sort the movies by (e.g.,  rating, title).
- Example:
  - GET `/movies?sortBy=rating`
- Response :
List of movies sorted by the rating field.

#### 10. Paginate Movies
- URL: `/movies?page=<page>&limit=<limit>`
- Method: GET
- Query Parameters:
   - page: Page number for pagination.
   - limit: Number of results per page.
- Example:
   - GET `/movies?page=2&limit=5`
- Response :
<<<<<<< HEAD
Paginated list of movies, showing results for page 2 with a limit of 5 movies per page.
=======
Paginated list of movies, showing results for page 2 with a limit of 5 movies per page.
>>>>>>> 94c347e00ec3ff8a0fbaaf247f9a7b5b384a4fe7
