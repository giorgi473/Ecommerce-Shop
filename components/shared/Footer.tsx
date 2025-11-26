import {
  Truck,
  RefreshCw,
  Shield,
  Gift,
  Headphones,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

const socialList = [
  { icon: "/images/carte_bleue.png" },
  { icon: "/images/visa.png" },
  { icon: "/images/paypal.png" },
  { icon: "/images/master_card.png" },
  { icon: "/images/american_express.png" },
];

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
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between sm:flex-row gap-4">
            <div className="flex items-center gap-3">
              <div className="border w-fit p-2 rounded-full hover:bg-red-400 transition-all duration-300 ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-5"
                >
                  <path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" />
                </svg>
              </div>
              <div className="border w-fit p-2 rounded-full hover:bg-red-400 transition-all duration-300 ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-5"
                >
                  <path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z" />
                </svg>
              </div>
              <div className="border w-fit p-2 rounded-full hover:bg-red-400 transition-all duration-300 ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-5"
                >
                  <path d="M544.5 273.9C500.5 274 457.5 260.3 421.7 234.7L421.7 413.4C421.7 446.5 411.6 478.8 392.7 506C373.8 533.2 347.1 554 316.1 565.6C285.1 577.2 251.3 579.1 219.2 570.9C187.1 562.7 158.3 545 136.5 520.1C114.7 495.2 101.2 464.1 97.5 431.2C93.8 398.3 100.4 365.1 116.1 336C131.8 306.9 156.1 283.3 185.7 268.3C215.3 253.3 248.6 247.8 281.4 252.3L281.4 342.2C266.4 337.5 250.3 337.6 235.4 342.6C220.5 347.6 207.5 357.2 198.4 369.9C189.3 382.6 184.4 398 184.5 413.8C184.6 429.6 189.7 444.8 199 457.5C208.3 470.2 221.4 479.6 236.4 484.4C251.4 489.2 267.5 489.2 282.4 484.3C297.3 479.4 310.4 469.9 319.6 457.2C328.8 444.5 333.8 429.1 333.8 413.4L333.8 64L421.8 64C421.7 71.4 422.4 78.9 423.7 86.2C426.8 102.5 433.1 118.1 442.4 131.9C451.7 145.7 463.7 157.5 477.6 166.5C497.5 179.6 520.8 186.6 544.6 186.6L544.6 274z" />
                </svg>
              </div>
              <div className="border w-fit p-2 rounded-full hover:bg-red-400 transition-all duration-300 ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-5"
                >
                  <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
                </svg>
              </div>
            </div>
            <div>© 2025 - Ecommerce Template</div>
            <div className="flex items-center gap-2">
              {socialList.map((list, index) => {
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Image src={list.icon} alt="bla" width={30} height={30} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
