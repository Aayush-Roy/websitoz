'use client';
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import {
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineRocketLaunch,
  HiOutlineCog,
  HiOutlineVideoCamera,
  HiOutlineMegaphone,
} from "react-icons/hi2";
import { ImSpinner9 } from "react-icons/im";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export default function LearningPlatformAd() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzGfE0ssObKkFNQitXK331lKkSXtXkXIxXNxGML2Hyo-si0Df8dni38LhBayicrxKmwzQ/exec";

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
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 border border-gray-200 rounded-2xl m-4 max-w-7xl w-full shadow-xl p-6 md:p-10 font-[Poppins] mx-auto bg-gradient-to-br from-indigo-50 to-white">
      {/* Left Section */}
      <div className="flex flex-col text-center md:text-left items-center md:items-start w-full md:w-1/2">
        {/* Branding Badge */}
        <span className="inline-flex items-center gap-1.5 bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          <HiOutlineRocketLaunch className="w-4 h-4" />
          ALL-IN-ONE SOLUTION
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          Want to start your own learning platform?
        </h2>

        <p className="text-gray-800 mt-4 text-base sm:text-lg max-w-md">
          We handle the complete setup: from the platform build to professional video shoots and all the technical details.
        </p>

        {/* Features List */}
        <div className="mt-6 space-y-3 text-left self-start max-w-md w-full">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">What&apos;s Included:</h3>
          <div className="flex items-center gap-3">
            <HiOutlineCog className="w-6 h-6 text-indigo-500 flex-shrink-0" />
            <span className="text-gray-700">Full Platform Setup & Customization</span>
          </div>
          <div className="flex items-center gap-3">
            <HiOutlineVideoCamera className="w-6 h-6 text-indigo-500 flex-shrink-0" />
            <span className="text-gray-700">Professional Video Shoots & Editing</span>
          </div>
          <div className="flex items-center gap-3">
            <HiOutlineMegaphone className="w-6 h-6 text-indigo-500 flex-shrink-0" />
            <span className="text-gray-700">Marketing & Launch Strategy Support</span>
          </div>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4 mt-8 w-full max-w-sm" onSubmit={handleSubmit} name="learning-platform-consult">
          {/* Name Input */}
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
              className="border border-gray-300 rounded-md p-3 pl-10 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email Input */}
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
              className="border border-gray-300 rounded-md p-3 pl-10 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Phone Input */}
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
              className="border border-gray-300 rounded-md p-3 pl-10 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-blue text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition-all active:scale-95 text-sm sm:text-base disabled:bg-indigo-400"
          >
            {loading ? (
              <>
                <ImSpinner9 className="animate-spin w-5 h-5" />
                Submitting...
              </>
            ) : (
              <>
                Book Free Consultation
                <HiOutlineArrowRight className="w-5 h-5" />
              </>
            )}
          </button>

          {isSubmitted && (
            <p className="text-green-600 font-medium text-sm mt-2 flex items-center justify-center md:justify-start gap-1.5">
              <HiOutlineCheckCircle className="w-5 h-5" />
              Thank you! We&apos;ll contact you soon.
            </p>
          )}
        </form>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2">
        <Image
          width={500}
          height={500}
          className="w-[250px] sm:w-[320px] md:w-[400px] lg:w-[450px] h-auto object-contain drop-shadow-lg rounded-lg"
          src="https://cdn.dribbble.com/userupload/45328582/file/21d689d6acc570495c0cde6b92182c10.png?resize=1504x1128&vertical=center"
          alt="Online Learning Platform Setup"
        />
      </div>
    </section>
  );
}
