/* eslint-disable no-unused-vars */
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* 🔥 Background Glow */}
      <div className="absolute w-125 h-125 bg-indigo-600/30 blur-3xl rounded-full -top-25 -left-25" />
      <div className="absolute w-100 h-100 bg-purple-600/20 blur-3xl rounded-full -bottom-25 -right-25" />

      {/* ✨ Floating Elements */}
      <motion.div
        className="absolute w-3 h-3 bg-indigo-400 rounded-full top-20 left-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-2 h-2 bg-purple-400 rounded-full bottom-20 right-32"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* 💎 Main Card */}
      <motion.div
        className="relative z-10 backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-3xl p-10 text-center max-w-lg w-full"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* 🚨 404 Text */}
        <motion.h1
          className="text-8xl font-extrabold bg-linear-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>

        {/* 🧾 Title */}
        <h2 className="mt-4 text-2xl font-semibold text-white">
          Lost in HeroStore
        </h2>

        {/* 📄 Description */}
        <p className="mt-3 text-gray-400">
          Looks like this page doesn’t exist or has been moved. Let’s get you
          back to exploring amazing products.
        </p>

        {/* 🎯 Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-indigo-500/40 transition"
            >
              Go Home
            </motion.button>
          </Link>

          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
            >
              Browse Products
            </motion.button>
          </Link>
        </div>

        {/* 🧠 Extra */}
        <p className="mt-6 text-xs text-gray-500">Error 404 • HeroStore</p>
      </motion.div>
    </div>
  );
}
