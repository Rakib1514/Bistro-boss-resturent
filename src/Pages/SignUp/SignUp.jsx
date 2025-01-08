import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import AuthContext from "../../Providers/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { signUpUser } = useContext(AuthContext);
  const [btnLoading, setBtnLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setBtnLoading(true);

    try {
      const result = await signUpUser(data.email, data.password);
      if (result.user) {
        reset();
        navigate("/");
        alert("account created");
      }
    } catch (error) {
      alert("account creation failed" + error.message);
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet title="Bistro Boss | Sign up" />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* Full Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Full Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                placeholder="Email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  maxLength: {
                    value: 32,
                    message: "Password must not exceed 32 characters",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                    message:
                      "Password must include uppercase, lowercase, and a number",
                  },
                })}
                placeholder="Password"
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign up"
                className={`btn ${btnLoading ? "btn-disabled" : "btn-outline"}`}
              />
              {btnLoading && (
                <div className="flex justify-center my-4">
                  <span className="loading loading-spinner text-accent"></span>
                </div>
              )}
            </div>
          </form>
          <label className="label">
            <Link to={'/log-in'} className="label-text-alt link link-hover">
              Already have an account? Log in here.
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
