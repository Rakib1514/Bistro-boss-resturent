import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import AuthContext from "../../Providers/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [disable, setDisable] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);
  const captchaRef = useRef(null);

  const { signInUser, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

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
        navigate("/");
      }
    } catch (error) {
      alert("sign in Failed" + error.message);
      setLoading(false);
    } finally {
      setBtnLoading(false);
    }
  };

  const handleValidateCaptcha = () => {
    const value = captchaRef.current.value;
    if (validateCaptcha(value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content    flex-col md:flex-row">
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
              <input
                ref={captchaRef}
                name="captcha"
                type="text"
                placeholder="Type the captcha above"
                className="input input-bordered"
                required
              />
              <div
                onClick={handleValidateCaptcha}
                className="btn btn-outline btn-xs mt-1"
              >
                Verify
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
