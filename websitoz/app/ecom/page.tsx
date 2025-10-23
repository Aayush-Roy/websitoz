// components/EcommerceAd.tsx
'use client';
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import {
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineShoppingCart,
  HiOutlineGlobeAlt,
  HiOutlineCreditCard,
  HiOutlineMegaphone,
} from "react-icons/hi2";
import { ImSpinner9 } from "react-icons/im";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export default function EcommerceAd() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Your Google Sheet script URL
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwK1I9kzgExYukuzhgrgP5M7_n2ipcVn-A2nWUqSnJ_YsjZsXU7sC9ckpLGnxB3gIjn/exec";

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
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 border border-gray-200 rounded-2xl m-4 max-w-7xl w-full shadow-xl p-6 md:p-10 font-[Poppins] mx-auto bg-gradient-to-br from-pink-50 to-white">
      
      {/* Left Section */}
      <div className="flex flex-col text-center md:text-left items-center md:items-start w-full md:w-1/2">
        {/* Branding Badge */}
        <span className="inline-flex items-center gap-1.5 bg-pink-100 text-hoblue text-xs font-semibold px-3 py-1 rounded-full mb-4">
          <HiOutlineShoppingCart className="w-4 h-4" />
          E-COMMERCE MADE EASY
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-btnblue leading-tight">
          Want to take your e-commerce business online?
        </h2>

        <p className="text-gray-800 mt-4 text-base sm:text-lg max-w-md">
          Let us help you set up your online store, handle payments, manage inventory, and boost your sales with modern digital strategies.
        </p>

        {/* Features List */}
        <div className="mt-6 space-y-3 text-left self-start max-w-md w-full">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">What We Offer:</h3>
          <div className="flex items-center gap-3">
            <HiOutlineGlobeAlt className="w-6 h-6 text-pink-500 flex-shrink-0" />
            <span className="text-gray-700">Custom Online Store Setup</span>
          </div>
          <div className="flex items-center gap-3">
            <HiOutlineCreditCard className="w-6 h-6 text-pink-500 flex-shrink-0" />
            <span className="text-gray-700">Secure Payment & Checkout Integration</span>
          </div>
          <div className="flex items-center gap-3">
            <HiOutlineMegaphone className="w-6 h-6 text-pink-500 flex-shrink-0" />
            <span className="text-gray-700">Marketing & Sales Strategy Support</span>
          </div>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4 mt-8 w-full max-w-sm" onSubmit={handleSubmit} name="ecommerce-consult">
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
              className="border border-gray-300 rounded-md p-3 pl-10 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-500"
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
              className="border border-gray-300 rounded-md p-3 pl-10 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-500"
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
              className="border border-gray-300 rounded-md p-3 pl-10 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-btnblue text-white font-semibold py-3 rounded-md hover:bg-pink-600 transition-all active:scale-95 text-sm sm:text-base disabled:bg-pink-300"
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
              Thank you! We’ll contact you soon.
            </p>
          )}
        </form>
      </div>

      {/* Right Images */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 w-full md:w-1/2">
        <Image
          src="https://cdn.dribbble.com/userupload/45328582/file/21d689d6acc570495c0cde6b92182c10.png?resize=1504x1128&vertical=center"
          width={400}
          height={400}
          className="w-full h-auto object-contain rounded-lg shadow-lg"
          alt="E-commerce Store Design"
        />
        <Image
          src="https://cdn.dribbble.com/userupload/16608933/file/original-00e898917c6c9cf0538c871ec035d1e7.png?format=webp&resize=400x300&vertical=center"
          width={400}
          height={400}
          className="w-full h-auto object-contain rounded-lg shadow-lg"
          alt="Online Shopping Experience"
        />
        <Image
          src="https://cdn.dribbble.com/userupload/16145017/file/original-7130156912f1d78c7bb3631400e69332.png?format=webp&resize=400x300&vertical=center"
          width={400}
          height={400}
          className="w-full h-auto object-contain rounded-lg shadow-lg"
          alt="Mobile E-commerce App"
        />
        <Image
          src="https://cdn.dribbble.com/userupload/14617839/file/original-b8c5a4b48a167bd502a119e282c73aac.png?format=webp&resize=400x300&vertical=center"
          width={400}
          height={400}
          className="w-full h-auto object-contain rounded-lg shadow-lg"
          alt="Modern Shopping UI"
        />
      </div>
    </section>
  );
}
