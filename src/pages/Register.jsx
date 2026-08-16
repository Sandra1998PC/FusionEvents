import { useEffect, useState } from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  ArrowRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import regBg from "../assets/RegBg.png"
import { registerAPI } from "../components/services/allAPIs";
import Swal from "sweetalert2";

const Register = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "Participant",
  });

  const [errors, setErrors] = useState({});
  const [passwordMatchError, setPasswordMatchError] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let error = {};

    // Required

    if (!form.fullName.trim())
      error.fullName = "Full name is required";

    if (!form.email.trim())
      error.email = "Email is required";

    if (!form.phone.trim())
      error.phone = "Phone number is required";

    if (!form.password)
      error.password = "Password is required";

    if (!form.confirmPassword)
      error.confirmPassword = "Confirm your password";

    // Email

    if (
      form.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      error.email = "Invalid email address";
    }

    // Phone

    if (
      form.phone &&
      !/^[6-9]\d{9}$/.test(form.phone)
    ) {
      error.phone = "Enter a valid phone number";
    }

    // Password Strength

    if (
      form.password &&
      !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(form.password)
    ) {
      error.password =
        "Minimum 8 characters with uppercase, lowercase & number";
    }

    // Match

    if (
      form.password !== form.confirmPassword
    ) {
      error.confirmPassword =
        "Passwords do not match";
    }

    setErrors(error);

    return Object.keys(error).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      console.log({
        username: form.fullName, email: form.email,
        phonenumber: form.phone, password: form.password, role: form.role
      });
      const result = await registerAPI({
        username: form.fullName, email: form.email,
        phonenumber: form.phone, password: form.password, role: form.role
      })
      console.log(result)
      if (result.status == 201) {
        Swal.fire({
          title: "Registered Successfully !!!",
          icon: "success"
        });
        setForm({
          fullName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          role: "Participant",
        })
      }
      else {
        Swal.fire({
          title: "Something Went Wrong !!!",
          icon: "error"
        });
      }
    }
  };

  useEffect(() => {
    if (!form?.password || !form.confirmPassword) {
      setPasswordMatchError(false);
      return;
    }
    setPasswordMatchError(form.password !== form.confirmPassword);
  }, [form.password, form.confirmPassword]);

  return (
    <section className="relative min-h-screen flex justify-center items-center overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <img
          src={regBg}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/0 via-slate-950/80 to-violet-950/0"></div>

        <div className="absolute inset-0 backdrop-blur-sm"></div>

      </div>

      {/* Glow */}

      <div className="absolute left-0 top-10 w-80 h-80 bg-cyan-500/20 blur-[130px] rounded-full"></div>

      <div className="absolute right-0 bottom-0 w-96 h-96 bg-violet-600/20 blur-[150px] rounded-full"></div>

      {/* Card */}

      <div className="relative w-full max-w-lg mx-5 animate-[fadeIn_.8s_ease]">

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-[0_0_50px_rgba(124,58,237,.25)]">

          {/* Logo */}

          <div className="text-center mb-10">

            <h1 className="text-4xl font-bold">

              <span className="text-cyan-400">
                Fusion
              </span>

              <span className="text-violet-500">
                Events
              </span>

            </h1>

            <h2 className="text-3xl font-bold text-white mt-5">

              Create Account

            </h2>

            <p className="text-slate-400 mt-2">
              Join FusionEvents today.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Name */}

            <Input
              icon={<User />}
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              error={errors.fullName}
            />

            {/* Email */}

            <Input
              icon={<Mail />}
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />

            {/* Phone */}

            <Input
              icon={<Phone />}
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              error={errors.phone}
            />

            {/* Password */}

            <Input
              icon={<Lock />}
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              error={errors.password}
            />

            {/* Confirm */}

            <Input
              icon={<Eye />}
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />

            {/* Role */}

            {passwordMatchError && (
              <p className="mt-3 text-yellow-600 text-sm text-center">
                Password and confirm password must be same
              </p>
            )}


            <div>

              <label className="text-white mb-3 block">
                Select Role
              </label>

              <div className="grid grid-cols-2 gap-4">

                {["Participant", "Organizer"].map(
                  (role) => (

                    <label
                      key={role}
                      className={`cursor-pointer py-4 rounded-xl border text-center transition ${form.role === role
                        ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
                        : "border-white/10 text-slate-300"
                        }`}
                    >

                      <input
                        type="radio"
                        name="role"
                        value={role}
                        checked={form.role === role}
                        onChange={handleChange}
                        hidden
                      />

                      {role}

                    </label>

                  )
                )}

              </div>

            </div>

            {/* Button */}

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-600 text-white font-semibold flex justify-center items-center gap-2 hover:scale-105 transition shadow-[0_0_30px_rgba(34,211,238,.45)]"
            >

              Create Account

              <ArrowRight size={20} />

            </button>

            <p className="text-center text-slate-400">

              Already have an account?

              <Link className="text-cyan-400 ml-2 cursor-pointer" to={"/login"}>
                Login
              </Link>

            </p>

          </form>

        </div>

      </div>

    </section>
  );
};

const Input = ({
  icon,
  error,
  ...props
}) => (
  <div>
    <div className="relative">

      <div className="absolute left-4 top-4 text-cyan-400">
        {icon}
      </div>

      <input
        {...props}
        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-400 outline-none"
      />

    </div>

    {error && (
      <p className="text-red-400 text-sm mt-2">
        {error}
      </p>
    )}
  </div>
);

export default Register;