import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { setUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { LOGO, PROFILE_ICON } from "../utils/constants";

export  const Header = () => {

    const navigate = useNavigate();

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate('/');
        }).catch((error) => {
            console.error("Sign-out error:", error);
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName } = user;
            dispatch(setUser({ uid, email, displayName }));
            navigate('/browse');
          } else {
            dispatch(removeUser());
            navigate('/');
          }
        });

        return () => unsubscribe();
      }, []);

    return (
        <div className="flex items-center justify-between w-full px-4 py-2">
            <div className="w-40 flex items-center">
                <img src={LOGO}
                alt="Netlix logo"
                />
            </div>
            {user && (
                <div className="flex items-center gap-5">
                <img className="profile-icon w-12 h-12" src={PROFILE_ICON} alt="Profile icon"/>
                <button onClick={handleSignOut} className="bg-red-600 px-4 py-2 rounded-md text-white text-sm">Sign Out</button>
            </div>
            )}
        </div>
    )
}