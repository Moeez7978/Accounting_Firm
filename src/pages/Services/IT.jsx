import { motion } from "framer-motion";
import { itSubServices } from "../../data/itSubServices";
import SubServiceCard from "../../components/SubServiceCard";

export default function IT() {
  return (
    <section className="bg-gray-50 pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6"
        >
          IT & Cloud Solutions
        </motion.h1>

        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Empower your business with our cloud-based accounting and IT
          solutions. From secure data management to full cloud migrations, we
          help you leverage technology for better efficiency, security, and
          control.
        </p>
      </div>

      {/* Sub Services Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {itSubServices.map((sub) => (
          <motion.div
            key={sub.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SubServiceCard {...sub} basePath={"/services/it-services"}/>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="/contact"
          className="inline-block bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Modernize Your Accounting Today
        </a>
      </div>
    </section>
  );
}
