import React from "react";
import { Montserrat } from "next/font/google";
import Heading from "./Heading";
import { FaPrint, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import Link from "next/link";

const mont = Montserrat({ subsets: ["latin"] });

const tiers = [
  {
    label: "Routine",
    price: 45,
    desc: "3–5 business days",
    details: [
      "Pre-scheduled appointment",
      "Flexible time slots",
      "All standard document types",
    ],
    highlight: false,
    badge: null,
  },
  {
    label: "Rush",
    price: 65,
    desc: "Within 48 hours",
    details: [
      "Priority dispatch",
      "Same business day",
      "All standard document types",
    ],
    highlight: false,
    badge: null,
  },
  {
    label: "Same Day",
    price: 85,
    desc: "Within 24 hours",
    details: [
      "Immediate availability",
      "24/7 · Evenings & holidays",
      "All standard document types",
    ],
    highlight: true,
    badge: "Most Requested",
  },
];

const Pricing = () => {
  return (
    <section className="py-16 px-4 bg-gray-50" id="pricing">
      <div className="container mx-auto">
        <Heading title="Simple, Transparent Pricing" />
        <p className="text-center text-gray-500 -mt-4 mb-6 text-base max-w-xl mx-auto">
          No hidden fees. No surprises. We come to you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-lg p-6 text-center transition-shadow duration-200 ${
                tier.highlight
                  ? "border-2 border-purple-700 shadow-xl"
                  : "border border-gray-200 shadow-sm hover:shadow-md"
              }`}
            >
              {tier.badge && (
                <span
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 bg-purple-700 text-white text-xs font-bold px-4 py-1 rounded-full tracking-wider uppercase whitespace-nowrap ${mont.className}`}
                >
                  {tier.badge}
                </span>
              )}

              <p
                className={`text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3 ${mont.className}`}
              >
                {tier.label}
              </p>

              <div className="flex items-start justify-center gap-0.5">
                <span
                  className={`text-2xl font-extrabold text-purple-700 mt-1 ${mont.className}`}
                >
                  $
                </span>
                <span
                  className={`text-6xl font-extrabold text-purple-700 leading-none ${mont.className}`}
                >
                  {tier.price}
                </span>
              </div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">
                Service Fee
              </p>

              <p className="text-sm text-gray-500 mt-3 min-h-[2.5rem]">
                {tier.desc}
              </p>

              <hr className="my-5 border-gray-100" />

              <ul className="space-y-2.5 text-sm text-gray-500 text-left">
                {tier.details.map((d, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="text-purple-600 font-bold text-base leading-none">
                      ✓
                    </span>
                    {d}
                  </li>
                ))}
              </ul>

              <Link href="#contactus">
                <button
                  className={`mt-6 w-full py-2.5 rounded-md text-sm font-semibold transition-colors duration-150 cursor-pointer ${
                    tier.highlight
                      ? "bg-purple-700 text-white hover:bg-purple-800"
                      : "border border-purple-700 text-purple-700 hover:bg-purple-50"
                  } ${mont.className}`}
                >
                  Book Now
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-col md:flex-row gap-3 md:gap-6 justify-center items-center text-sm text-gray-400 max-w-4xl mx-auto">
          <div className="flex items-center gap-2">
            <FaPrint className="text-purple-400 shrink-0" />
            <span>
              First 20 pages printed free ·{" "}
              <strong className="font-semibold text-gray-500">$0.10/page</strong>{" "}
              thereafter
            </span>
          </div>
          <span className="hidden md:block text-gray-300">|</span>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-purple-400 shrink-0" />
            <span>Pricing may vary for distant service locations</span>
          </div>
        </div>

        <div className="mt-6 max-w-4xl mx-auto">
          <div className="bg-[#100028] text-white rounded-lg p-6 flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
            <div className="bg-purple-700/20 p-3 rounded-full shrink-0">
              <FaSearch className="text-purple-400" size={22} />
            </div>
            <div className="flex-1">
              <h3 className={`font-bold text-lg mb-1 ${mont.className}`}>
                Skip Trace Services
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Need to locate someone for process serving? Our skip trace
                service uses professional databases to find current addresses
                and contact information, fast and discreetly.
              </p>
            </div>
            <Link href="#contactus" className="shrink-0">
              <button
                className={`bg-purple-700 hover:bg-purple-800 text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-colors cursor-pointer ${mont.className}`}
              >
                Inquire Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
