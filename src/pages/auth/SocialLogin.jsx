import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { registerUserWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // sign in with google
  async function handleSignInWithGoogle() {
    try {
      const { user } = await registerUserWithGoogle();
      toast.success(`Welcome, ${user?.displayName}`);
      navigate(`${location.state || "/"}`);
    } catch (error) {
      toast.error("Your credentials wrong!");
    }
  }

  return (
    <div>
      <button
        onClick={handleSignInWithGoogle}
        className="btn btn-outline w-full"
      >
        <FaGoogle className="text-2xl" />
        Log in With Google
      </button>
    </div>
  );
};

export default SocialLogin;
