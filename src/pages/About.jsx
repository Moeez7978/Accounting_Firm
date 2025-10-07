import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Thompson",
    role: "Business Owner",
    feedback:
      "Dynamic Accounting has transformed the way we manage our books. Their accuracy and professionalism are unmatched!",
  },
  {
    id: 2,
    name: "James Patel",
    role: "Freelancer",
    feedback:
      "Their tax advisory team helped me optimize my returns and stay compliant with HMRC effortlessly.",
  },
  {
    id: 3,
    name: "Laura Green",
    role: "Startup Founder",
    feedback:
      "The Dynamic team is fast, reliable, and always available. Perfect accounting partner for startups like mine!",
  },
];

export default function About() {
  return (
    <section className="bg-gray-50 pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-blue-900 mb-6"
        >
          About Dynamic Accounting
        </motion.h1>

        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
          At Dynamic Accounting, we’re committed to delivering accurate,
          technology-driven accounting and tax solutions for businesses and
          individuals across the UK. Our mission is to simplify financial
          management and empower clients to make informed decisions with
          confidence.
        </p>

        {/* Work Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-blue-900 text-xl font-semibold mb-2">
              500+ Clients
            </h3>
            <p className="text-gray-600 text-sm">
              Trusted by businesses, freelancers, and startups across the UK.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-blue-900 text-xl font-semibold mb-2">
              10+ Years Experience
            </h3>
            <p className="text-gray-600 text-sm">
              Decades of combined expertise in accounting, tax, and advisory.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-blue-900 text-xl font-semibold mb-2">
              100% Compliance
            </h3>
            <p className="text-gray-600 text-sm">
              Always up-to-date with HMRC and Companies House regulations.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-blue-900 mb-10"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <p className="text-gray-700 italic mb-4">“{t.feedback}”</p>
              <h4 className="text-blue-900 font-semibold">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
