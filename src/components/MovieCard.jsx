import { IMG_CDN } from "../utils/constants";

const MovieCard = ({movie}) =>{
    return (
        <div className="flex-shrink-0 w-32 sm:w-44 rounded-lg overflow-hidden shadow-md">
        <img src={`${IMG_CDN}/${movie?.poster_path}`} />
        </div>
    )
}

export default MovieCard;