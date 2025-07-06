import { useState, useRef } from "react";
import { validateForm } from "../utils/validateForm";

export const Login = () => {
  const [showSignIn, setShowSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const password2 = useRef(null);

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
  };

  const handleSubmit = () => {
    const msg = validateForm(email?.current?.value, password?.current?.value, password2?.current?.value);
    setErrorMsg(msg);
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
        <p className="cursor-pointer" onClick={toggleSignIn}>
          {showSignIn
            ? "New to Netflix? Sign up now."
            : "Already a registered user? Sign In."}
        </p>
      </form>
    </div>
  );
};
