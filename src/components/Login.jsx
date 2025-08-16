import { useState, useRef } from "react";
import { validateForm } from "../utils/validateForm";
import { auth, googleProvider } from "../utils/firebase";
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
  const [showSignIn, setShowSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const password2 = useRef(null);

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
  };

  const handleSubmit = async () => {
    const msg = validateForm(email?.current?.value, password?.current?.value, password2?.current?.value);
    setErrorMsg(msg);

    if (msg) return; // If validation fails, don't proceed
    
    try {
      if (showSignIn) {
        // Sign In with Email/Password
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        console.log("User signed in:", userCredential.user);
      } else {
        // Sign Up with Email/Password
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        console.log("User created:", userCredential.user);
      }
    } catch (error) {
      setErrorMsg(error.message);
      console.error("Authentication error:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google sign-in successful:", result.user);
      // You can redirect or update UI state here

    } catch (error) {
      setErrorMsg(error.message);
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <div className="w-4/12 my-30 mx-auto bg-black text-white rounded-md p-5 opacity-80">
      <form onSubmit={(e) => e.preventDefault()} className="text-sm">
        <h1 className="text-xl">{showSignIn ? "Sign In" : "Sign Up"} </h1>
        <input
          className="w-full p-2 my-4 rounded-sm border text-white font-normal"
          name="email"
          ref={email}
          placeholder="Email"
        />
        <input
          className="w-full p-2 my-4 rounded-sm border text-white font-normal"
          name="password"
          ref={password}
          placeholder="Password"
          type="password"
        />
        {!showSignIn && (
          <input
            className="w-full p-2 my-4 rounded-sm border text-white font-normal"
            name="password2"
            ref={password2}
            placeholder="Confirm Password"
            type="password"
          />
        )}
        <p className="text-red-500 font-bold py-2">{errorMsg}</p>
        <button
          onClick={handleSubmit}
          className="w-full p-2 my-4 rounded-sm bg-red-600"
        >
          {showSignIn ? "Sign In" : "Sign Up"}
        </button>
        
        <div className="text-center my-4">
          <span className="text-gray-400">or</span>
        </div>
        
        <button
          onClick={handleGoogleSignIn}
          className="w-full p-2 my-2 rounded-sm bg-white text-black font-medium flex items-center justify-center gap-2 hover:bg-gray-100"
          type="button"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>
        
        <p className="cursor-pointer" onClick={toggleSignIn}>
          {showSignIn
            ? "New to Netflix? Sign up now."
            : "Already a registered user? Sign In."}
        </p>
      </form>
    </div>
  );
};
