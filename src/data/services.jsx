// src/data/services.js
import { FaCalculator, FaBalanceScale, FaCloud, FaUsers } from "react-icons/fa";

export const services = [
  {
    id: 1,
    title: "Accounting & Bookkeeping",
    icon: <FaCalculator className="text-4xl text-yellow-400 mb-4" />,
    description:
      "Accurate financial records, ledger management, and compliance-ready reporting for businesses of all sizes.",
  },
  {
    id: 2,
    title: "Tax Management & Advisory",
    description:
      "Expert tax planning, HMRC compliance, and advisory solutions to minimize liabilities and maximize savings.",
    icon: <FaBalanceScale className="text-4xl text-yellow-400 mb-4" />,
  },
  {
    id: 3,
    title: "Outsourcing & Remote Staffing",
    description:
      "Cost-effective remote accounting, payroll, and admin professionals who act as an extension of your team.",
    icon: <FaUsers className="text-4xl text-yellow-400 mb-4" />,
  },
  {
    id: 4,
    title: "IT & Cloud Solutions",
    description:
      "Seamless cloud accounting setup, data security, and IT support to power your firm’s digital transformation.",
    icon: <FaCloud className="text-4xl text-yellow-400 mb-4" />,
  },
];
