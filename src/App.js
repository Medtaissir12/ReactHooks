import "./App.css";
import { useState ,useEffect } from "react";
import Navi from "../src/components/Navi/Navi";
import MovieList from "./components/MovieList/MovieList";
import { v4 as uuidv4 } from "uuid";

function App() {
  
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rating: 3,
    },
    {
      id: uuidv4(),
      title: "Parasite",
      description:
        "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      posterURL:
        "https://musicart.xboxlive.com/7/6e3a5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
      rating: 1,
    },
    {
      id: uuidv4(),
      title: "Schindler's List",
      description:
        "In Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      posterURL: "https://flxt.tmsimg.com/assets/p15227_p_v13_be.jpg",
      rating: 4,
    },
    {
      id: uuidv4(),
      title: "12 Angry Men",
      description:
        "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BZmY4NjczYTgtZDM1NC00OGUxLTkzYzgtMWZmOGY4NjkwMGFmXkEyXkFqcGdeQXVyODU2MDg1NzU@._V1_.jpg",
      rating: 4,
    },
    {
      id: uuidv4(),
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL: "https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg",
      rating: 5,
    },
    {
      id: uuidv4(),
      title: "The Godfather: Part II",
      description:
        "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: 3.0,
    },
    {
      id: uuidv4(),
      title: "Avengers: Infinity War",
      description:
        "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
      rating: 3,
    },
    
    {
      id: uuidv4(),
      title: "The Godfather",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
      rating: 2,
    },
    {
      id: uuidv4(),
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rating: 3.0,
    },
  ]);
  
  const[ inputSearch , setInputSearch] = useState("");
  const [stars, setStars] = useState(1);
  const[filtredMovies,setFiltredMovies]= useState(movies)

  useEffect(() => {
    setFiltredMovies(
      movies.filter((movie) => {
        return (
          movie.title
            .toLocaleLowerCase()
            .includes(inputSearch.toLocaleLowerCase()) && movie.rating >= stars
        );
      })
    );
  }, [movies, stars, inputSearch]);


  return (
    <div className="App">
    
      <Navi movies={movies} setMovies={setMovies} inputSearch= {inputSearch}  setInputSearch={setInputSearch} stars = {stars} setStars={setStars} />
      <MovieList movies={filtredMovies} style={{display:"flex" , flexDirection:"row" , flexWrap:"wrap"}} />
    </div>
  );
}

export default App;
