import { GoogleGenAI } from "@google/genai";
import { GEMINI_API_KEY } from "./constants";

// The client will use the GEMINI_API_KEY from the environment
const gemini = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export default gemini;