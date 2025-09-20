import { API_OPTIONS } from "./constants";

/**
 * Search for a movie by name using TMDB API. Returns the first matching result (or null).
 * @param {string} query - The movie name to search for.
 * @returns {Promise<Object|null>} - TMDB movie object or null.
 */
export async function searchMovieByName(query) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`;
  try {
    const response = await fetch(url, API_OPTIONS);
    const data = await response.json();
    if (data && data.results && data.results.length > 0) {
      return data.results[0];
    }
    return null;
  } catch (error) {
    console.error("TMDB search error for:", query, error);
    return null;
  }
}

/**
 * Search for multiple movies by an array of names. Returns an array of TMDB movie objects (null if not found).
 * @param {string[]} names
 * @returns {Promise<Array<Object|null>>}
 */
export async function searchMoviesByNames(names) {
  return Promise.all(names.map((name) => searchMovieByName(name)));
}
