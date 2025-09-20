import { useSelector } from "react-redux";

const Container = () => {
    const topRatedMovies = useSelector((state) => state.movies?.topRatedMovies); 
    
    const {title = '', overview = ''} = topRatedMovies?.[0] || {};    

    return (
        <div className="w-full absolute text-white top-2/12 p-2 sm:p-4 md:p-6 lg:p-10 bg-gradient-to-r from-black flex flex-col gap-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold pb-3 sm:pb-5">{title}</h1>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl pb-3 sm:pb-5 line-clamp-4">{overview}</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md" >
                <button className="bg-red-600 px-6 py-4 rounded-md text-white text-sm flex items-center gap-1">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                    Play
                </button>
                <button className="bg-gray-600 px-6 py-4 rounded-md text-white text-sm">More Info</button>
            </div>
        </div>
    );
}

export default Container;