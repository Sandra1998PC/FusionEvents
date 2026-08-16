import { Mail, Lock, Eye, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import loginBg from '../assets/loginBg.png'
import { useState } from "react";
import { loginAPI } from "../components/services/allAPIs";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [error, setError] = useState(false);
  console.log(loginData);


  const login = async (e) => {
    e.preventDefault();
    if (!loginData?.email || !loginData?.password) {
      setError(true)
      return
    }
    try{const result = await loginAPI(loginData)
    console.log(result)
    if (result.status == 200) {
      Swal.fire({
        title: "LogIn Successfull !!!",
        icon: "success"
      });
      sessionStorage.setItem("user", JSON.stringify(result.data.existingUser))
      sessionStorage.setItem("token", result.data.token)
      if (result.data.existingUser.role == "Participant") {
        navigate(`/users/${result.data.existingUser._id}/dashboard`)
      }
      else if (result.data.existingUser.role == "Organizer") {
        navigate(`/organizer/${result.data.existingUser._id}/dashboard`)
      }
      else if (result.data.existingUser.role == "Admin") {
        navigate(`/admin/${result.data.existingUser._id}/dashboard`)
      }
    }
    else {
      Swal.fire({
        title: "Something went Wrong !!!",
        icon: "error"
      });
    }}
    catch(error){
      console.log(error)
       Swal.fire({
        title: "Something went Wrong !!!",
        icon: "error"
      });
    }
  }
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <img
          src={loginBg}
          alt="Event Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-slate-950/15 to-violet-950/10"></div>

        {/* Blur */}

        <div className="absolute inset-0 backdrop-blur-sm"></div>

      </div>

      {/* Cyan Glow */}

      <div className="absolute -left-20 top-20 w-72 h-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Purple Glow */}

      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-violet-600/20 blur-[150px]" />

      {/* Login Card */}

      <div className="relative w-full max-w-md mx-5 animate-[fadeIn_.8s_ease]">

        <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(124,58,237,.25)] p-10">

          {/* Logo */}

          <div className="text-center">

            <h1 className="text-4xl font-bold">

              <span className="text-cyan-400">
                Fusion
              </span>

              <span className="text-violet-500">
                Events
              </span>

            </h1>

            <h2 className="mt-6 text-3xl font-bold text-white">
              Welcome Back
            </h2>

            <p className="text-slate-400 mt-3">
              Sign in to continue your journey.
            </p>

          </div>

          {/* Form */}

          <form className="mt-10 space-y-6" onSubmit={login}>

            {/* Email */}

            <div className="relative">

              <Mail
                className="absolute left-4 top-4 text-cyan-400"
                size={20}
              />

              <input
                type="email"
                placeholder="Email Address"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    email: e.target.value
                  })
                }
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-400 outline-none transition"
              />

            </div>

            {/* Password */}

            <div className="relative">

              <Lock
                className="absolute left-4 top-4 text-cyan-400"
                size={20}
              />

              <input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    password: e.target.value
                  })
                }
                className="w-full pl-12 pr-12 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-400 outline-none transition"
              />

              <Eye
                className="absolute right-4 top-4 text-slate-400 cursor-pointer"
                size={20}
              />

            </div>

            <div>
              {error && (
                <p className="mt-3 text-yellow-600 text-sm text-center">
                  Password and confirm password must be same
                </p>
              )}
            </div>

            {/* Remember */}

            <div className="flex items-center justify-between">

              <label className="flex items-center gap-2 text-slate-300">

                <input
                  type="checkbox"
                  className="accent-cyan-400"
                />

                Remember Me

              </label>

              <button
                type="button"
                className="text-cyan-400 hover:text-cyan-300 transition"
              >
                Forgot Password?
              </button>

            </div>

            {/* Login */}

            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-600 text-white font-semibold flex justify-center 
            items-center gap-2 hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(34,211,238,.45)]"
             type="submit">

              Login

              <ArrowRight size={20} />

            </button>

            {/* Divider */}

            <div className="relative text-center">

              <div className="absolute inset-0 flex items-center">

                <div className="w-full border-t border-white/10"></div>

              </div>

              <span className="relative bg-slate-900 px-4 text-slate-400 text-sm">
                OR
              </span>

            </div>

            {/* Google */}

            <button
              type="button"
              className="w-full py-4 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition"
            >

              Continue with Google

            </button>

          </form>

          {/* Register */}

          <div className="mt-8 text-center text-slate-400">

            Don't have an account?

            <button className="ml-2 text-cyan-400 hover:text-cyan-300 font-semibold" onClick={() => navigate("/register")}>

              Create Account

            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Login;