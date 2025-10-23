// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

interface ProductType {
  id: number;
  section: string;
  link: string[];
}

const products: ProductType[] = [
  { id: 1, section: "Menu", link: ["Home", "Popular", "About", "Contact"] },
  { id: 2, section: "Category", link: ["Design", "Mockup", "View all", "Log In"] },
  { id: 3, section: "Pages", link: ["404", "Instructions", "License"] },
  { id: 4, section: "Others", link: ["Styleguide", "Changelog"] },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white rounded-t-2xl overflow-hidden">
      {/* Top Footer Content */}
      <div className="mx-auto max-w-2xl sm:max-w-4xl lg:max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Column 1 - Logo & Social */}
          <div className="lg:col-span-4">
            <h3 className="text-3xl font-semibold mb-4">Websitoz</h3>

            <div className="flex gap-4 items-center">
              {/* Facebook Icon */}
              <Link href="https://facebook.com" target="_blank">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-900 rounded hover:scale-110 transition-transform">
                  <Image
                    src="/images/footer/vec.svg"
                    alt="facebook"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </div>
              </Link>

              {/* Twitter Icon */}
              <Link href="https://twitter.com" target="_blank">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-900 rounded hover:scale-110 transition-transform">
                  <Image
                    src="/images/footer/twitter.svg"
                    alt="twitter"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </div>
              </Link>

              {/* Instagram Icon */}
              <Link href="https://instagram.com" target="_blank">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-900 rounded hover:scale-110 transition-transform">
                  <Image
                    src="/images/footer/instagram.svg"
                    alt="instagram"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* Columns 2-5 - Links */}
          {products.map((product) => (
            <div key={product.id} className="lg:col-span-2 mt-8 sm:mt-0">
              <h4 className="text-xl font-bold mb-4">{product.section}</h4>
              <ul className="space-y-2">
                {product.link.map((link, index) => (
                  <li key={index}>
                    <Link href="#" className="hover:text-gray-400 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="mx-auto max-w-2xl sm:max-w-4xl lg:max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © 2025 - All Rights Reserved by{" "}
            <Link href="#" target="_blank" className="hover:text-white">
              websitoz.com
            </Link>
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white text-sm border-l border-gray-700 pl-4"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
