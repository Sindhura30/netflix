import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) =>{
    return (
        <div className="w-full">
        <h2 className="text-white text-2xl pb-1.5">{title}</h2>
        <div className="flex gap-4 overflow-x-auto">
            {movies && movies.map((movie) => {
                return <MovieCard className="flex-shrink-0" key={movie.id} movie={movie}/>
            })}
        </div>
        </div>
    )
}

export default MovieList;