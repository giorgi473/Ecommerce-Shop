import {
  Truck,
  RefreshCw,
  Shield,
  Gift,
  Headphones,
  MessageCircle,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-50 mt-16 mb-16 lg:mb-0">
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-14 text-center text-sm">
              {[
                {
                  Icon: Truck,
                  title: "Free Shipping",
                  desc: "For all Orders Over $100",
                },
                {
                  Icon: RefreshCw,
                  title: "30 Days Returns",
                  desc: "For an Exchange Product",
                },
                {
                  Icon: Shield,
                  title: "Secured Payment",
                  desc: "Payment Cards Accepted",
                },
                {
                  Icon: Gift,
                  title: "Special Gifts",
                  desc: "Our First Product Order",
                },
                {
                  Icon: Headphones,
                  title: "Support 24/7",
                  desc: "Contact us Anytime",
                },
              ].map(({ Icon, title, desc }, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center cursor-pointer"
                >
                  <div className="mb-2 transition-all duration-300 ease-in-out group-hover:-translate-y-1">
                    <Icon className="w-10 h-10 text-gray-600 group-hover:text-red-500 transition-colors duration-300" />
                  </div>
                  <p className="font-semibold text-gray-900">{title}</p>
                  <p className="text-gray-500 text-xs mt-3">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative">
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-gray-300"></div>

            <h3 className="text-lg font-bold text-gray-900 mb-6">Contact us</h3>
            <div className="space-y-4 text-sm text-gray-600 pr-8 lg:pr-12">
              <p>
                Classyshop - Mega Super Store
                <br />
                507-Union Trade Centre France
              </p>
              <p className="mt-4">
                <a
                  href="mailto:sales@yourcompany.com"
                  className="hover:text-red-500"
                >
                  sales@yourcompany.com
                </a>
              </p>
              <p className="text-xl font-semibold text-red-500 mt-2">
                (+995) 599-71-57-01
              </p>
              <button className="flex flex-col gap-1 py-3 mt-4 text-left">
                <div className="flex items-center gap-2">
                  <MessageCircle size={40} className="text-red-400" />
                  <div className="flex flex-col">
                    <span className="font-medium text-lg">Online Chat</span>
                    <span className="text-lg">Get Expert Help</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Products</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {[
                "Prices drop",
                "New products",
                "Best sales",
                "Contact us",
                "Sitemap",
                "Stores",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-red-500 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Our company
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {[
                "Delivery",
                "Legal Notice",
                "Terms and conditions of use",
                "About us",
                "Secure payment",
                "Login",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-red-500 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-5">
              Subscribe to newsletter
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to our latest newsletter to get news about special
              discounts.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="w-full bg-red-500 text-white font-medium py-3 rounded-md hover:bg-red-600 transition">
                SUBSCRIBE
              </button>
              <label className="flex items-start gap-2 text-xs text-gray-500">
                <input type="checkbox" className="mt-0.5 rounded" />
                <span>
                  I agree to the terms and conditions and the privacy policy
                </span>
              </label>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-white border-t border-gray-300 py-4">
        <div className="container mx-auto px-4">sdsdsdsd</div>
      </div>
    </footer>
  );
}

export default Footer;
