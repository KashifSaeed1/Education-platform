import { useState } from "react";

const AuthModal = ({ isOpen, onClose, defaultTab = "login" }) => {
  const [tab, setTab] = useState(defaultTab);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleLogin = () => {
    if (!form.email || !form.password) return setError("Please fill in all fields.");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClose();
      // navigate("/dashboard") — add your navigate logic here
    }, 1500);
  };

  const handleSignup = () => {
    if (!form.name || !form.email || !form.password) return setError("Please fill in all fields.");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClose();
    }, 1500);
  };

  const switchTab = (t) => { setTab(t); setError(""); };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden">

        {/* Header */}
        <div className="pt-6 px-7">
          <button onClick={onClose} className="float-right text-gray-400 hover:text-gray-700 text-lg">✕</button>
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-500 to-teal-500 flex items-center justify-center text-white font-semibold text-lg mb-4">E</div>

          {/* Tabs */}
          <div className="flex border-b border-gray-100">
            {["login", "signup"].map((t) => (
              <button key={t} onClick={() => switchTab(t)}
                className={`flex-1 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                  tab === t ? "border-purple-500 text-purple-600" : "border-transparent text-gray-400"
                }`}>
                {t === "login" ? "Login" : "Sign up"}
              </button>
            ))}
          </div>
        </div>

        <div className="px-7 py-6">
          {error && <div className="bg-red-50 text-red-600 text-sm px-3 py-2 rounded-lg mb-4">{error}</div>}

          <button  className="cursor-pointer w-full h-11 border border-gray-200 rounded-lg flex items-center justify-center gap-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition mb-5">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-xs text-gray-400">{tab === "login" ? "or login with email" : "or sign up with email"}</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          {tab === "login" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Email address</label>
                <input name="email" type="email" placeholder="ali@example.com"
                  onChange={handleChange} value={form.email}
                  className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm bg-gray-50 focus:outline-none focus:border-purple-400 focus:bg-white transition" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Password</label>
                <input name="password" type="password" placeholder="Enter your password"
                  onChange={handleChange} value={form.password}
                  className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm bg-gray-50 focus:outline-none focus:border-purple-400 focus:bg-white transition" />
              </div>
              <div className="text-right">
                <span className="text-xs text-purple-500 cursor-pointer font-medium">Forgot password?</span>
              </div>
              <button onClick={handleLogin} disabled={loading}
                className="w-full h-11 bg-gradient-to-r from-purple-500 to-teal-500 text-white rounded-lg font-medium text-sm hover:opacity-90 transition disabled:opacity-60">
                {loading ? "Logging in..." : "Login to my account"}
              </button>
              <p className="text-center text-xs text-gray-500">
                Don't have an account?{" "}
                <span onClick={() => switchTab("signup")} className="text-purple-500 cursor-pointer font-medium">Sign up free</span>
              </p>
            </div>
          )}

          {tab === "signup" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Full name</label>
                <input name="name" type="text" placeholder="Ali Ahmed"
                  onChange={handleChange} value={form.name}
                  className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm bg-gray-50 focus:outline-none focus:border-purple-400 focus:bg-white transition" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Email address</label>
                <input name="email" type="email" placeholder="ali@example.com"
                  onChange={handleChange} value={form.email}
                  className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm bg-gray-50 focus:outline-none focus:border-purple-400 focus:bg-white transition" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Password</label>
                <input name="password" type="password" placeholder="Create a password"
                  onChange={handleChange} value={form.password}
                  className="w-full h-10 border border-gray-200 rounded-lg px-3 text-sm bg-gray-50 focus:outline-none focus:border-purple-400 focus:bg-white transition" />
              </div>
              <button onClick={handleSignup} disabled={loading}
                className="w-full h-11 bg-gradient-to-r from-purple-500 to-teal-500 text-white rounded-lg font-medium text-sm hover:opacity-90 transition disabled:opacity-60">
                {loading ? "Creating account..." : "Create my account"}
              </button>
              <p className="text-center text-xs text-gray-500">
                Already have an account?{" "}
                <span onClick={() => switchTab("login")} className="text-purple-500 cursor-pointer font-medium">Login</span>
              </p>
            </div>
          )}
        </div>

        <div className="border-t border-gray-100 py-3 px-7 text-center text-xs text-gray-400">
          By continuing, you agree to our Terms & Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default AuthModal;