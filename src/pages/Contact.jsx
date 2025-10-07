import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Your message has been submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gray-50 pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 shadow-md"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Get a Quote / Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-blue-900 font-semibold py-3 rounded-lg hover:bg-yellow-300 transition"
            >
              Submit
            </button>
          </form>
        </motion.div>

        {/* Location & Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center space-y-6"
        >
          <div>
            <h3 className="text-blue-900 text-2xl font-semibold mb-3">
              Visit Our Office
            </h3>
            <p className="text-gray-700">
              123 King’s Road, London, UK <br />
              Mon–Fri: 9:00 AM – 6:00 PM
            </p>
          </div>

          <div>
            <h3 className="text-blue-900 text-2xl font-semibold mb-3">
              Contact Info
            </h3>
            <p className="text-gray-700">
              Email: info@dynamicaccounting.co.uk <br />
              Phone: +44 20 1234 5678
            </p>
          </div>

          {/* Embedded Google Map */}
          <div className="w-full h-64 border-4 border-white rounded-2xl shadow overflow-hidden">
            <iframe
              title="Dynamic Accounting Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.107813735078!2d-0.1277581!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b333c8a0b59%3A0x86c5d9fa31a836f2!2sLondon!5e0!3m2!1sen!2suk!4v1685640000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
