import { useSelector } from "react-redux";

const Container = () => {
    const nowPlayingMovies = useSelector((state) => state.movies?.nowPlayingMovies); 
    
    const {title = '', overview = ''} = nowPlayingMovies?.[0] || {};    

    return (
        <div className="w-full absolute text-white top-1/5 p-6 background-gradient-to-r from-black">
            <h1 className="text-5xl font-bold pb-5">{title}</h1>
            <p className="text-xl w-2xl pb-5">{overview}</p>
            <div className="flex gap-4">
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