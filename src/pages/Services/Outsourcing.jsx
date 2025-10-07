import { motion } from "framer-motion";
import { outsourcingSubServices } from "../../data/outsourcingSubServices";
import SubServiceCard from "../../components/SubServiceCard";

export default function Outsourcing() {
  return (
    <section className="bg-gray-50 pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6"
        >
          Outsourcing & Remote Staffing
        </motion.h1>

        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Optimize costs and boost efficiency by delegating your accounting,
          payroll, and administrative work to our experienced remote teams.
          We provide full-time or part-time professionals who integrate
          seamlessly into your operations.
        </p>
      </div>

      {/* Sub Services Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {outsourcingSubServices.map((sub) => (
          <motion.div
            key={sub.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SubServiceCard {...sub} basePath={"/services/outsourcing"}/>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="/contact"
          className="inline-block bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Hire Remote Experts Now
        </a>
      </div>
    </section>
  );
}
