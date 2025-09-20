import { useState } from "react";
import gemini from "../utils/gemini";
import { useDispatch, useSelector } from "react-redux";
import { gptSearchResponse } from "../store/gptSlice";
import { searchMoviesByNames } from "../utils/tmdb";
import MovieList from "./MovieList";

const GPTSearch = () => {

    const [gptQuery, setGptQuery] = useState('');
    const gptResponse = useSelector((state) => state.gpt.gptSearchResponse);
    const dispatch = useDispatch();
    
    
    const handleGPTSearch = async (e) => {
        e.preventDefault();
        const prompt = `Act as a movie recommendation system and give me 5 movie recommendations based on the query: ${gptQuery}.\nGive me only 5 movies in the response which are comma separated. For example: movie1, movie2, movie3, movie4, movie5`;
        const response = await gemini.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });
        dispatch(gptSearchResponse(response.text));

        // Parse Gemini output and fetch TMDB details
        if (typeof response.text === "string" && response.text.length > 0) {
            const movieNames = response.text.split(",").map((m) => m.trim()).filter(Boolean);
            if (movieNames.length > 0) {
                const movies = await searchMoviesByNames(movieNames);
                dispatch(gptSearchResponse(movies));
            }
        }

    }



    return (
        <div>   
        <div className="flex flex-row gap-2 w-full max-w-2xl mx-auto mt-8">
            <input
                value={gptQuery}
                className="flex-1 p-4 rounded-md bg-gray-700 text-white"
                type="text"
                placeholder="Tell us what kind of movies you want to watch"
                onChange={(e) => setGptQuery(e.target.value)}
            />
            <button
                className="bg-red-600 px-6 py-4 rounded-md text-white text-sm"
                style={{ minWidth: '120px' }}
                onClick={handleGPTSearch}
            >
                Search
            </button>
        </div>
        {Array.isArray(gptResponse) && gptResponse.length > 0 ? (
            <div className="mt-4">
                <MovieList title="Recommended Movies" movies={gptResponse} />
            </div>
        ) : (
            typeof gptResponse === "string" && gptResponse.length > 0 ? (
                <div className="mt-4 text-white">Searching for movies...</div>
            ) : null
        )}
        </div>
    )
}

export default GPTSearch;