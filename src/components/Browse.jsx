import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import Trailer from "./Trailer";
import Container from "./Container";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

export const Browse = () => {
    useNowPlayingMovies();  
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    const nowPlayingMovies = useSelector((state)=> state.movies.nowPlayingMovies) || {};
    const popularMovies = useSelector((state)=> state.movies.popularMovies) || {};
    const topRatedMovies = useSelector((state)=> state.movies.topRatedMovies) || {};
    const upcomingMovies = useSelector((state)=> state.movies.upcomingMovies) || {};
    return (
        <div className="w-full relative">
            <Trailer/>
            <Container/>
            <div className='-mt-60'>
                <div className="bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex flex-row gap-2">
                    <MovieList  title='Top Rated Movies' movies={topRatedMovies}/>
                </div>
            </div>
            <div className="bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex flex-row gap-2 bg-black">
            <MovieList  title='Now Playing Movies' movies={nowPlayingMovies}/>
            </div>
            <div className="bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex flex-row gap-2 bg-black">
            <MovieList  title='Popular Movies' movies={popularMovies}/>
            </div>
            <div className="bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex flex-row gap-2 bg-black">
                    <MovieList  title='Upcoming Movies' movies={upcomingMovies}/>
            </div>  
        </div>
    )
}
