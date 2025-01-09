import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import AuthContext from "../../Providers/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Login = () => {
  const [disable, setDisable] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);
  const location = useLocation();

  const { signInUser, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(3);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value;

    setBtnLoading(true);

    try {
      const result = await signInUser(email, password);
      if (result.user) {
        alert("sign in successfully");
        navigate(from, { replace: true });
      }
    } catch (error) {
      alert("sign in Failed" + error.message);
      setLoading(false);
    } finally {
      setBtnLoading(false);
    }
  };

  const handleValidateCaptcha = (e) => {
    const value = e.target.value;
    if (validateCaptcha(value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet title="Bistro Boss | Sign in" />
      <div className="hero-content    flex-col md:flex-row relative">
        <div className="absolute top-0 left-24">
          <button onClick={handleBack} className="btn btn-outline">
            {" "}
            <span>
              <FaBackward />
            </span>{" "}
            Go back{" "}
          </button>
        </div>
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 md:w-1/2 max-w-sm  shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <div className="relative">
                <input
                  onBlur={handleValidateCaptcha}
                  name="captcha"
                  type="text"
                  placeholder="Type the captcha above"
                  className="input input-bordered"
                  required
                />
                {disable || (
                  <IoCheckmarkDoneCircle className="absolute top-2 right-16 text-3xl text-green-600" />
                )}
              </div>
            </div>

            <div className="form-control mt-6">
              <input
                disabled={disable}
                className={`btn  ${
                  btnLoading ? "btn-disabled" : "btn-outline"
                }`}
                type="submit"
                value={btnLoading ? "logging in..." : "Log in"}
              />
              {/* {btnLoading &&   <span className="loading loading-spinner"></span>} */}
            </div>
          </form>
          <p>
            <small>
              New Here?{" "}
              <Link to="/sign-up" className="link text-blue-700 ">
                {" "}
                Create an account!
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
