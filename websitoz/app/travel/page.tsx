// components/TravelAgencyAd.tsx
'use client';
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import {
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineArrowRight,
  HiOutlineSparkles,
  HiOutlineCheckCircle,
} from "react-icons/hi2";
import { ImSpinner9 } from "react-icons/im";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export default function TravelAgencyAd() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxrq6KNMuVzIquvxB-6r2if2nSrFqFRn4jl3yJriVREUdVEW9oibRysl5gnXlPoiESR2w/exec";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.currentTarget),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Error submitting form!");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between gap-10 border border-gray-200 rounded-2xl m-4 max-w-7xl w-full
                 shadow-xl p-6 md:p-10 font-[Poppins] mx-auto
                 bg-gradient-to-br from-blue-50 to-white"
    >
      {/* Left Section */}
      <div className="flex flex-col text-center md:text-left items-center md:items-start w-full md:w-1/2">
        <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          <HiOutlineSparkles className="w-4 h-4" />
          EXCLUSIVE OFFER
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          Are you a Travel Agency?
        </h2>

        <p className="text-gray-800 mt-4 text-base sm:text-lg max-w-md">
          Want a professional website to showcase your travel deals?
          <br />
          Get your website ready at just{" "}
          <span className="font-bold text-red-600">₹8000/-*</span>
        </p>

        <p className="text-gray-600 mt-2 text-xs sm:text-sm">
          Limited-time offer! Fill out the form below to get started.
        </p>

        {/* Form */}
        <form
          className="flex flex-col gap-4 mt-8 w-full max-w-sm"
          onSubmit={handleSubmit}
          name="travel-agency-form"
        >
          {/* Name */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <HiOutlineUser className="w-5 h-5" />
            </span>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 pl-10 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <HiOutlineEnvelope className="w-5 h-5" />
            </span>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 pl-10 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <HiOutlinePhone className="w-5 h-5" />
            </span>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 pl-10 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-blue-600  font-semibold py-3 rounded-md bg-blue text-white transition-all active:scale-95 text-sm sm:text-base disabled:bg-blue-400"
          >
            {loading ? (
              <>
                <ImSpinner9 className="animate-spin w-5 h-5" />
                Submitting...
              </>
            ) : (
              <>
                Get Website Now
                <HiOutlineArrowRight className="w-5 h-5" />
              </>
            )}
          </button>

          {isSubmitted && (
            <p className="text-green-600 font-medium text-sm mt-2 flex items-center justify-center md:justify-start gap-1.5">
              <HiOutlineCheckCircle className="w-5 h-5" />
              Thank you! We’ll contact you soon.
            </p>
          )}
        </form>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2">
        <Image
          src="https://cdn.dribbble.com/userupload/43749519/file/original-0a9b762a450a47b2b2a3a4c577d118e3.jpg?resize=1504x1129&vertical=center"
          alt="Travel Agency Offer"
          width={450}
          height={450}
          className="object-contain drop-shadow-lg rounded-lg"
        />
      </div>
    </section>
  );
}
