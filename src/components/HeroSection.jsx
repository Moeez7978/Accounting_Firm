// src/components/HeroSection.jsx
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-center bg-cover"
      style={{
        // gradient first, then image — tweak the alpha (0.55) to make it darker/lighter
        backgroundImage:
          "linear-gradient(rgba(30,58,138,0.25), rgba(30,58,138,0.45)), url('/images/img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 max-w-3xl text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
        >
          Expert Tax Management &{" "}
          <span className="text-yellow-400">Advisory Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-gray-200 text-lg sm:text-xl mt-6 mb-8 leading-relaxed"
        >
          Simplify your finances, stay HMRC compliant, and make smarter financial
          decisions with our professional tax advisory and accounting services.
        </motion.p>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          href="/contact"
          className="inline-block bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
        >
          Get Your Taxes Managed Now
        </motion.a>
      </div>
    </section>
  );
}
