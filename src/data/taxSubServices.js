// src/data/taxSubServices.js
import {
  FaFileInvoiceDollar,
  FaUserTie,
  FaBalanceScale,
  FaRegBuilding,
  FaChartPie,
} from "react-icons/fa";

export const taxSubServices = [
  {
    id: 1,
    title: "Personal Tax Returns (Self Assessment)",
    description:
      "We prepare and submit your personal tax returns accurately, ensuring you claim all available allowances and stay compliant with HMRC.",
    icon: FaUserTie,
  },
  {
    id: 2,
    title: "Corporate Tax Planning",
    description:
      "Strategic corporation tax advice and compliance services to minimize liabilities while aligning with your business objectives.",
    icon: FaRegBuilding,
  },
  {
    id: 3,
    title: "VAT Advisory & Registration",
    description:
      "Expert assistance with VAT registration, quarterly submissions, and advisory on complex transactions and cross-border sales.",
    icon: FaBalanceScale,
  },
  {
    id: 4,
    title: "Capital Gains Tax (CGT) Advisory",
    description:
      "Professional planning and reporting of property, investment, and asset disposals to ensure efficient CGT outcomes.",
    icon: FaFileInvoiceDollar,
  },
  {
    id: 5,
    title: "HMRC Investigations & Disputes",
    description:
      "End-to-end representation and negotiation with HMRC during audits, compliance checks, or disputes — protecting your interests.",
    icon: FaChartPie,
  },
];
