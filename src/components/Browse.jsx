import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import Trailer from "./Trailer";
import Container from "./Container";

export const Browse = () => {
    useNowPlayingMovies();  
    return (
        <div className="w-full relative">
            <Trailer/>
            <Container/>
        </div>
    )
}
