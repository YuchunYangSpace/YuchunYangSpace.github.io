$(document).ready(function () {
    const apiKey = "k_e6kza24r";
    const searchURL = `https://imdb-api.com/en/API/SearchMovie/${apiKey}/`;
    const detailsURL = `https://imdb-api.com/en/API/Title/${apiKey}/`;

    $("#searchBtn").on("click", function () {
        const query = $("#search").val();
        searchMovies(query);
    });



//input movies titile
    function searchMovies(query) {
        if (query) {
            $.getJSON(searchURL + query, function (data) {
                displayResults(data.results);
            }).fail(function () {
                console.error("An error occurred while fetching the data.");
            });
        }
    }
//display movie result after input the title of movie
    function displayResults(movies, fromSearch = true) {
        prevPageInfo.type = fromSearch ? "search" : "random";
        prevPageInfo.query = fromSearch ? $("#search").val() : "";
        prevPageInfo.page = fromSearch ? 1 : currentPage;
        const resultsDiv = $("#results");
        resultsDiv.empty();

        if (movies.length > 0) {
            movies.forEach(function (movie) {
                const movieDiv = $("<div>").addClass("movie");

                const title = $("<h3>").text(movie.title);
                const year = $("<p>").text(movie.description);
                const img = $("<img>").attr("src", movie.image);

                img.on("click", function () {
                    fetchMovieDetails(movie.id);
                });

                movieDiv.append(img, title, year);
                resultsDiv.append(movieDiv);
            });
        } else {
            resultsDiv.append($("<p>").text("No results found."));
        }
    }

    function fetchMovieDetails(movieId) {
        $.getJSON(detailsURL + movieId, function (data) {
            displayMovieDetails(data);
        }).fail(function () {
            console.error("An error occurred while fetching the movie details.");
        });
    }
//display the movies details
    function displayMovieDetails(movie) {
    const resultsDiv = $("#results");
    resultsDiv.empty();

    $("#prevPage").hide();
    $("#nextPage").hide();

    const movieDiv = $("<div>").addClass("movie-details");
    const title = $("<h2>").text(movie.title);
    const img = $("<img>").attr("src", movie.image). addClass("poster");
    const year = $("<p>").text("Year: " + movie.year);
    const rating = $("<p>").text("Rating: " + movie.imDbRating);
    const runtime = $("<p>").text("Runtime: " + movie.runtimeStr);
    const genre = $("<p>").text("Genres: " + movie.genres);
    const plot = $("<p>").text("Plot: " + movie.plot).addClass("plot");
    const backButton = $("<button>").text("Back").on("click", function () {
        if (prevPageInfo.type === "search") {
            searchMovies(prevPageInfo.query);
        } else {
            displayRandomMovies(prevPageInfo.page);
        }
    });


    movieDiv.append(title, img, year, rating, runtime, genre, plot, backButton);
    resultsDiv.append(movieDiv);
}
//display random movies
function displayRandomMovies(page) {
    const apiKey = "k_e6kza24r";
    const url = `https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`;
    $.get(url, function (data) {
        const shuffledMovies = data.items.slice();
        shuffleArray(shuffledMovies);

        const start = (page - 1) * 9;
        const end = start + 9;
        const randomMovies = shuffledMovies.slice(start, end);

        const movieList = [];
        randomMovies.forEach((movie) => {
            const movieData = {
                id: movie.id,
                title: movie.title,
                description: movie.year,
                image: movie.image
            };
            movieList.push(movieData);
        });
        displayResults(movieList, false);
    });
}
// previous button and next button
let currentPage = 1;

$(document).ready(function () {
    $("#searchForm").on("submit", function (event) {
        event.preventDefault();
        searchMovies($("#search").val());
    });

    $("#prevPage").on("click", function (event) {
        event.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            $("#results").empty();
            displayRandomMovies(currentPage);
        }
    });

    $("#nextPage").on("click", function (event) {
        event.preventDefault();
        currentPage++;
        $("#results").empty();
        displayRandomMovies(currentPage);
    });

    displayRandomMovies(currentPage);
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

});



let prevPageInfo = {
    type: "random", 
    query: "",
    page: 1,
};
