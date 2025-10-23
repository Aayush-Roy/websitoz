// components/GymAd.tsx
'use client';
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import {
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineMegaphone,
  HiOutlineVideoCamera,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";
import { ImSpinner9 } from "react-icons/im";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export default function GymAd() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwz_1Jye4e8u74ve0NR0nETwaP0FZeqp4ztS6zxSIvJBYAWutEneFO4fFYnkMxYStq5aw/exec";

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
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 border border-linegrey rounded-2xl m-4 max-w-7xl w-full shadow-xl p-6 md:p-10 font-[Poppins] mx-auto bg-gradient-to-br from-lightblue to-white">
      
      {/* Left Section */}
      <div className="flex flex-col text-center md:text-left items-center md:items-start w-full md:w-1/2">
        {/* Branding Badge */}
        <span className="inline-flex items-center gap-1.5 bg-gold text-darkpurple text-xs font-semibold px-3 py-1 rounded-full mb-4">
          <HiOutlineRocketLaunch className="w-4 h-4" />
          GYM LEAD GENERATION
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-btnblue leading-tight">
          Take Your Gym Online & Attract New Members
        </h2>

        <p className="text-grey mt-4 text-base sm:text-lg max-w-md">
          Running a gym? We help you generate leads, manage social media, and grow your fitness business online.
        </p>

        {/* Features List */}
        <div className="mt-6 space-y-3 text-left self-start max-w-md w-full">
          <h3 className="text-lg font-semibold text-darkpurple mb-2">What We Offer:</h3>
          <div className="flex items-center gap-3">
            <HiOutlineMegaphone className="w-6 h-6 text-btnblue flex-shrink-0" />
            <span className="text-grey">Social Media Management</span>
          </div>
          <div className="flex items-center gap-3">
            <HiOutlineVideoCamera className="w-6 h-6 text-btnblue flex-shrink-0" />
            <span className="text-grey">Video & Content Marketing</span>
          </div>
          <div className="flex items-center gap-3">
            <HiOutlineRocketLaunch className="w-6 h-6 text-btnblue flex-shrink-0" />
            <span className="text-grey">Lead Generation & Growth Strategy</span>
          </div>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4 mt-8 w-full max-w-sm" onSubmit={handleSubmit} name="gym-leads">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-grey">
              <HiOutlineUser className="w-5 h-5" />
            </span>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-linegrey rounded-md p-3 pl-10 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-btnblue"
            />
          </div>

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-grey">
              <HiOutlineEnvelope className="w-5 h-5" />
            </span>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-linegrey rounded-md p-3 pl-10 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-btnblue"
            />
          </div>

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-grey">
              <HiOutlinePhone className="w-5 h-5" />
            </span>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-linegrey rounded-md p-3 pl-10 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-btnblue"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-btnblue text-white font-semibold py-3 rounded-md hover:bg-gold transition-all active:scale-95 text-sm sm:text-base disabled:bg-lightgrey"
          >
            {loading ? (
              <>
                <ImSpinner9 className="animate-spin w-5 h-5" />
                Submitting...
              </>
            ) : (
              <>
                Get Free Consultation
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

      {/* Right Images Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 w-full md:w-1/2">
        <Image
          src="https://cdn.dribbble.com/userupload/5019491/file/original-2036bace372fd04831fcdd9dc35303fa.png?format=webp&resize=640x480&vertical=center"
          width={400}
          height={400}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          alt="Gym Equipment"
        />
        <Image
          src="https://cdn.dribbble.com/userupload/18289416/file/original-44f18375e0249fe99d7c4a56dfe3e729.png?crop=0x0-2400x1800&format=webp&resize=400x300&vertical=center"
          width={400}
          height={400}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          alt="Fitness Training"
        />
        <Image
          src="https://cdn.dribbble.com/userupload/43094770/file/original-e29a41b86f4a1a48bcb0c8378f0eb2ae.png?format=webp&resize=400x300&vertical=center"
          width={400}
          height={400}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          alt="Personal Trainer"
        />
        <Image
          src="https://cdn.dribbble.com/userupload/40929076/file/original-3669cfbeb8e743c332229789bee19606.png?format=webp&resize=400x300&vertical=center"
          width={400}
          height={400}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          alt="Modern Gym Interior"
        />
      </div>
    </section>
  );
}
