import { Car } from "lucide-react";

function ShippingPromoBanner() {
  return (
    <div className="border-2 border-red-500 py-4 lg:py-7 rounded-md">
      <div className="flex flex-col items-center justify-between lg:flex-row px-4">
        <div className="flex items-center gap-2 uppercase">
          <Car size={40} className="text-gray-600" />
          <h4 className="font-bold text-lg sm:text-xl text-gray-600">
            Free Shipping
          </h4>
        </div>
        <p className="text-center">
          Free Delivery Now On Your First Order and over $200
        </p>
        <strong className="text-xl text-gray-600">- Only $200*</strong>
      </div>
    </div>
  );
}

export default ShippingPromoBanner;
