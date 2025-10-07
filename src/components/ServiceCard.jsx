// src/components/ServiceCard.jsx
export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition-transform transform hover:-translate-y-2">
      <div className="flex justify-center mb-3">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
