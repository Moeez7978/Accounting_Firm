import { useParams, Link } from "react-router-dom";
import { accountingSubServices } from "../../data/accountingSubServices";
import { taxSubServices } from "../../data/taxSubServices";
import { outsourcingSubServices } from "../../data/outsourcingSubServices";
import { itSubServices } from "../../data/itSubServices";
import Contact from "../Contact"; // ✅ reuse your contact form section

const servicesMap = {
  accounting: accountingSubServices,
  tax: taxSubServices,
  outsourcing: outsourcingSubServices,
  it: itSubServices,
};

export default function ServiceDetail() {
  const { serviceSlug, subServiceSlug } = useParams();

  const subServices = servicesMap[serviceSlug] || [];
  const subService = subServices.find(
    (s) =>
      s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === subServiceSlug
  );

  if (!subService) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-blue-900">
          Service not found 😕
        </h1>
        <Link
          to="/services"
          className="mt-6 inline-block bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  const Icon = subService.icon;

  return (
    <section className="bg-gray-50 pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <div className="flex justify-center mb-4">
          <Icon className="text-5xl text-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6">
          {subService.title}
        </h1>

        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
          {subService.description}
        </p>

        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We provide end-to-end professional services to ensure you get the best
          results in this area — combining expertise, technology, and
          personalized support. Our team will handle your requirements with full
          transparency and accuracy.
        </p>
      </div>

      {/* Reused Contact Form */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
          Get a Quote or Consultation
        </h2>
        <Contact />
      </div>
    </section>
  );
}
