const movieplzButton = document.getElementById("movieplz-button");
const movieContainer = document.getElementById("movie-container");
const input = document.getElementById("movie-input");
const addButton = document.getElementById("add-button");
// const resetButton = document.getElementById("reset-button");
const apiKey = "db4bfeb1889b34b6baab8f1da186e907";

let originalMovies =[
    // { title: "Gone with the Wind", },
    // { title: "Casablanca", },
    // { title: "The Ten Commandments", },
    // { title: "Citizen Kane", },
    // { title: "Raging Bull", },
    // { title: "A Beautiful Mind", },
    // { title: "Singing in the Rain", },
    // { title: "The Last of the Mohicans", },
    // { title: "Ben-Hur", },
    // { title: "Star Wars: Episode IV - A New Hope", },
    // { title: "Terminator 2: Judgment Day", },
    // { title: "Aliens", },
    // { title: "A Perfect World", },
    // { title: "Fail-Safe", },
    // { title: "To Kill a Mockingbird", },
    // { title: "Lawrence of Arabia", }
];

const movies = [
    // { title: "Gone with the Wind", },
    // { title: "Casablanca", },
    // { title: "The Ten Commandments", },
    // { title: "Citizen Kane", },
    // { title: "Raging Bull", },
    // { title: "A Beautiful Mind", },
    // { title: "Singing in the Rain", },
    // { title: "The Last of the Mohicans", },
    // { title: "Ben-Hur", },
    // { title: "Star Wars: Episode IV - A New Hope", },
    // { title: "Terminator 2: Judgment Day", },
    // { title: "Aliens", },
    // { title: "A Perfect World", },
    // { title: "Fail-Safe", },
    // { title: "To Kill a Mockingbird", },
    // { title: "Lawrence of Arabia", }
];

addButton.addEventListener("click", () => {
    const newMovie = input.value;
    if (newMovie) {
      movies.push({ title: newMovie });
      input.value = ""; // clear the input field
    }
  });

  // resetButton.addEventListener("click", () => {
  //   movies = [...originalMovies]; // reset the movies array to the original state
  // });

movieplzButton.addEventListener("click", () => {
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  const movieTitle = randomMovie.title;
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieTitle}`)
    .then(response => response.json())
    .then(data => {
      const movie = data.results[0];
      const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      movieContainer.innerHTML = `
        <img id="movie-cover" src="${imageUrl}" alt="${randomMovie.title} cover">
        <h2 id="movie-title">${randomMovie.title}</h2>
        <p id="movie-year">${movie.release_date.substring(0,4)}</p>
      `;
      movieContainer.style.display = "block";
    })
    .catch(error => console.error(error));
});
