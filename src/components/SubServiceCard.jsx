
// import { Link } from "react-router-dom";

// export default function SubServiceCard({ icon: Icon, title, description }) {
//   // Create a slug-friendly path for dynamic routing
//   const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

//   // Infer main service from path using context or props later
//   // For now, we’ll pass it in the parent
//   return (
//     <Link
//       to={slug}
//       className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition-transform transform hover:-translate-y-2 block"
//     >
//       <div className="flex justify-center mb-3">
//         <Icon className="text-4xl text-yellow-400 mb-4" />
//       </div>
//       <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
//       <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
//     </Link>
//   );
// }
// src/components/SubServiceCard.jsx
import { Link } from "react-router-dom";

export default function SubServiceCard({ icon: Icon, title, description, basePath }) {
  // create a slug like "bookkeeping-services" or "vat-advisory"
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <Link
      to={`${basePath}/${slug}`} // ✅ builds correct path
      className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition-transform transform hover:-translate-y-2 block"
    >
      <div className="flex justify-center mb-3">
        <Icon className="text-4xl text-yellow-400 mb-4" />
      </div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </Link>
  );
}
