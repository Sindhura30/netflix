import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/moviesSlice";

export const useTrailerVideo = () => {

const nowPlayingMovies = useSelector((state) => state.movies?.nowPlayingMovies); 
const dispatch = useDispatch();

const trailerVideo = useSelector((state) => state.movies?.trailerVideo);

const getTrailer = async (movieId) => {      
    try {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
        const json = await data.json();
        return json;
    } catch (error) {
        console.error('Error fetching trailer:', error);
    }
};

useEffect(() => {
    const fetchTrailer = async () => {
        if (nowPlayingMovies && nowPlayingMovies.length > 0) {
            const movieId = nowPlayingMovies[0]?.id;
            if (movieId) {
                const trailerData = await getTrailer(movieId);
                if (trailerData && trailerData.results) {
                    // Find the trailer video (usually the first one or filter by type)
                    const trailer = trailerData.results.find(
                        video => video.type === "Trailer" && video.site === "YouTube"
                    ) || trailerData.results[0];
                    dispatch(addTrailer(trailer));
                }
            }
        }
    };
    
    fetchTrailer();
}, [nowPlayingMovies]);

return trailerVideo;
};