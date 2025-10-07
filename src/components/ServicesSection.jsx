// src/components/ServicesSection.jsx
import { services } from "../data/services.jsx";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-20 px-6" id="services">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4"
        >
          Our Core Services
        </motion.h2>

        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          We offer a comprehensive range of accounting, tax, and advisory
          solutions designed to simplify your financial management and help your
          business grow.
        </p>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
