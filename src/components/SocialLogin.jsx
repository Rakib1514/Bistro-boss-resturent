import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();

  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();

      if (!result?.user) {
        throw new Error("no user returned. google sign in failed");
      }

      const res = await axiosPublic.post("/users", {
        email: result.user.email,
        name: result.user.displayName,
      });

      if (!res.data.insertedId) {
        console.log("data already in db");
      }

      // Success flow

      alert("sign in successfully done");
      navigate("/");
    } catch (error) {
      alert("sign in with google failed" + error.message);
    } finally {
      // Some work maybe loading related work
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn w-full my-4">
          <FcGoogle className="text-xl mr-2" /> Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
