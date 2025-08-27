
import { useTrailerVideo } from "../hooks/useTrailerVideo";

const Trailer = () => {
    
    const trailerVideo = useTrailerVideo();

    return (
        <div>
            <iframe 
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=6N0EGNysOCV4tPzE&autoplay=1&mute=1`}   
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    );
};

export default Trailer;