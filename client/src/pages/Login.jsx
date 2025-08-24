import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { loginUser, registerUser } from "../api/auth";
import { AuthContext } from "../context/AuthContext";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  LogIn,
  UserPlus,
  KeyRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

// ✅ Schemas
const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const registerSchema = loginSchema
  .extend({
    username: z.string().min(3, "Username must be at least 3 characters"),
    role: z.enum(["user", "admin"], "Role must be either 'user' or 'admin'"),
    secretCode: z.string().optional(),
  })
  .refine(
    (data) =>
      data.role !== "admin" ||
      (data.secretCode && data.secretCode.trim() !== ""),
    {
      message: "Secret code is required for admin registration",
      path: ["secretCode"],
    }
  );

const LoginRegister = () => {
  const { setUser } = useContext(AuthContext);
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register: formRegister,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(isRegister ? registerSchema : loginSchema),
  });

  const selectedRole = watch("role", "user");

  const onSubmit = async (data) => {
    try {
      if (isRegister) {
        const res = await registerUser(data);
        toast.success(res.data.message || "Registered successfully!");
        setIsRegister(false);
        reset();
        navigate("/login");
      } else {
        const res = await loginUser(data);
        setUser(res.data.user);
        localStorage.setItem("token", res.data.token);
        toast.success("Logged in successfully!");
        reset();
        setTimeout(() => navigate("/"), 1000);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-50 p-4">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg transition-all">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600">
          {isRegister ? "Create Account" : "Welcome Back"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Username (register only) */}
          {isRegister && (
            <>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Username"
                  {...formRegister("username")}
                  className="w-full border rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* Role selection */}
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Role
                </label>
                <select
                  {...formRegister("role")}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
                {errors.role && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.role.message}
                  </p>
                )}
              </div>

              {/* Secret Code (only if admin is selected) */}
              {selectedRole === "admin" && (
                <div className="relative">
                  <KeyRound className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Enter Admin Secret"
                    {...formRegister("secretCode")}
                    className="w-full border rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  />
                  {errors.secretCode && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.secretCode.message}
                    </p>
                  )}
                </div>
              )}
            </>
          )}

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Email"
              {...formRegister("email")}
              className="w-full border rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...formRegister("password")}
              className="w-full border rounded-lg pl-10 pr-10 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-lg shadow-md transition"
          >
            {isRegister ? (
              <>
                <UserPlus size={18} /> Register
              </>
            ) : (
              <>
                <LogIn size={18} /> Login
              </>
            )}
          </button>
        </form>

        {/* Toggle Login/Register */}
        <p className="text-center mt-6 text-sm">
          {isRegister ? "Already have an account?" : "Don’t have an account?"}{" "}
          <button
            className="text-green-600 font-medium hover:underline"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Login" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginRegister;
