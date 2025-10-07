// src/data/accountingSubServices.js
import {
  FaBook,
  FaFileInvoice,
  FaRegClock,
  FaBusinessTime,
  FaChartLine,
} from "react-icons/fa";

export const accountingSubServices = [
  {
    id: 1,
    title: "Bookkeeping Services",
    description:
      "Accurate ledger maintenance, bank reconciliations, and transaction recording for complete financial clarity.",
    icon: FaBook,
  },
  {
    id: 2,
    title: "VAT Compliance",
    description:
      "Preparation and submission of VAT returns fully compliant with HMRC’s Making Tax Digital (MTD) rules.",
    icon: FaFileInvoice,
  },
  {
    id: 3,
    title: "Payroll Management",
    description:
      "Timely payroll processing, PAYE calculations, RTI submissions, and employee payslips handled with accuracy.",
    icon: FaRegClock,
  },
  {
    id: 4,
    title: "Limited Company Accounts",
    description:
      "Preparation and filing of annual accounts, CT600 tax returns, and Companies House submissions.",
    icon: FaBusinessTime,
  },
  {
    id: 5,
    title: "Management Accounts & Reporting",
    description:
      "Monthly or quarterly management reports, performance KPIs, and insights for smarter business decisions.",
    icon: FaChartLine,
  },
];
