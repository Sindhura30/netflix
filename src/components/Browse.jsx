import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import Trailer from "./Trailer";
import Container from "./Container";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";

export const Browse = () => {
    useNowPlayingMovies();  
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    const nowPlayingMovies = useSelector((state)=> state.movies.nowPlayingMovies) || {};
    const popularMovies = useSelector((state)=> state.movies.popularMovies) || {};
    const topRatedMovies = useSelector((state)=> state.movies.topRatedMovies) || {};
    const upcomingMovies = useSelector((state)=> state.movies.upcomingMovies) || {};
    const showGPT = useSelector((state)=> state.gpt.showGPT) || false;
    return (
        <div className="w-full relative min-h-screen flex flex-col gap-4 px-2 sm:px-4 md:px-8 lg:px-16">
            {showGPT ? <GPTSearch/> : 
            <div className="flex flex-col gap-6">
            <Trailer/>
            <Container/>
            <div className='-mt-60 max-w-full'>
                <div className="bg-gradient-to-t from-black via-black/80 to-transparent p-2 sm:p-4 flex flex-col md:flex-row gap-4 bg-black rounded-lg overflow-x-auto">
                    <MovieList  title='Top Rated Movies' movies={topRatedMovies}/>
                </div>
            </div>
            <div className="bg-gradient-to-t from-black via-black/80 to-transparent p-2 sm:p-4 flex flex-col md:flex-row gap-4 bg-black rounded-lg overflow-x-auto">
            <MovieList  title='Now Playing Movies' movies={nowPlayingMovies}/>
            </div>
            <div className="bg-gradient-to-t from-black via-black/80 to-transparent p-2 sm:p-4 flex flex-col md:flex-row gap-4 bg-black rounded-lg overflow-x-auto">
            <MovieList  title='Popular Movies' movies={popularMovies}/>
            </div>
            <div className="bg-gradient-to-t from-black via-black/80 to-transparent p-2 sm:p-4 flex flex-col md:flex-row gap-4 bg-black rounded-lg overflow-x-auto">
                    <MovieList  title='Upcoming Movies' movies={upcomingMovies}/>
            </div>  
            </div>
}
        </div>
    )
}
