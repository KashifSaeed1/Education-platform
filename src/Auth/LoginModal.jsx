import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  const handleGoogle = () => {
    console.log("Google login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white border border-gray-100 rounded-2xl w-full max-w-md overflow-hidden">

        {/* Top */}
        <div className="pt-8 pb-5 px-7 text-center">
          <div className="w-13 h-13 rounded-full bg-gradient-to-br from-purple-500 to-teal-500 flex items-center justify-center mx-auto mb-4 w-14 h-14">
            <span className="text-white text-xl font-semibold">E</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Welcome back</h2>
          <p className="text-sm text-gray-500 mt-1">Login to continue your learning journey</p>
        </div>

        {/* Body */}
        <div className="px-7 pb-7">

          {/* Google Button */}
          <button onClick={handleGoogle}
            className="w-full h-11 border border-gray-200 rounded-lg flex items-center justify-center gap-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition mb-5">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-gray-100"></div>
            <span className="text-xs text-gray-400">or login with email</span>
            <div className="flex-1 h-px bg-gray-100"></div>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 text-red-600 text-sm px-3 py-2 rounded-lg mb-4">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                Email address
              </label>
              <input name="email" type="email" placeholder="ali@example.com"
                onChange={handleChange} value={form.email}
                className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm bg-gray-50 focus:outline-none focus:border-purple-400 focus:bg-white transition" />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                Password
              </label>
              <input name="password" type="password" placeholder="Enter your password"
                onChange={handleChange} value={form.password}
                className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm bg-gray-50 focus:outline-none focus:border-purple-400 focus:bg-white transition" />
            </div>

            <div className="text-right">
              <span className="text-xs text-purple-500 cursor-pointer font-medium">
                Forgot password?
              </span>
            </div>

            <button type="submit" disabled={loading}
              className="w-full h-11 bg-gradient-to-r from-purple-500 to-teal-500 text-white rounded-lg font-medium text-sm hover:opacity-90 transition disabled:opacity-60">
              {loading ? "Logging in..." : "Login to my account"}
            </button>
          </form>

          <p className="text-center text-xs text-gray-500 mt-4">
            Don't have an account?{" "}
            <span onClick={() => navigate("/signup")}
              className="text-purple-500 cursor-pointer font-medium">
              Sign up free
            </span>
          </p>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 py-3 px-7 text-center text-xs text-gray-400">
          By logging in, you agree to our Terms & Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default Login;