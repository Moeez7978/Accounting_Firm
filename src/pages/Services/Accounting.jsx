import { accountingSubServices } from "../../data/accountingSubServices";
import SubServiceCard from "../../components/SubServiceCard";
import { motion } from "framer-motion";

export default function Accounting() {
  return (
    <section className="bg-gray-50 pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6"
        >
          Accounting & Bookkeeping Services
        </motion.h1>

        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          At Dynamic Accounting, we handle every aspect of your company’s
          financial management — from daily bookkeeping to annual statutory
          filings — so you can focus on growing your business with confidence.
        </p>
      </div>

      {/* Sub Services Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {accountingSubServices.map((sub) => (
          <motion.div
            key={sub.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SubServiceCard {...sub} basePath="/services/accounting" />
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="/contact"
          className="inline-block bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Get Your Accounting Managed Now
        </a>
      </div>
    </section>
  );
}
