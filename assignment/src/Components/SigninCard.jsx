import { User, Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SigninCard = () => {

    const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter username and password");
      return;
    }

    if (username === "testuser" && password === "Test123") {
      setError("");
      navigate("/list");
    } else {
      setError("Invalid Credentials");
    }
  };


  return (
    <form
      onSubmit={handleLogin}
      className="w-full max-w-md rounded-2xl border border-white/10 bg-[#020817]/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] p-8"
    >
      <h2 className="text-3xl font-semibold text-white mb-8">
        Sign in
      </h2>

      {/* Username */}
      <div className="mb-5">
        <label className="text-sm text-gray-400 mb-2 block">
          Username
        </label>
        <div className="relative">
          <User
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-[#020817] border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none rounded-lg py-3 pl-10 pr-3 text-white placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="text-sm text-gray-400 mb-2 block">
          Password
        </label>
        <div className="relative">
          <Lock
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#020817] border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none rounded-lg py-3 pl-10 pr-3 text-white placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Error */}
      {error && (
        <p className="text-red-400 text-sm mb-4">
          {error}
        </p>
      )}

      <button className="w-full bg-gray-300 hover:bg-gray-200 transition text-black font-medium py-3 rounded-lg">
        Sign in
      </button>
    </form>
  )
}

export default SigninCard
