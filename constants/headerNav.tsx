export interface Category {
  title: string;
  href: string;
  subcategories?: Array<{
    title: string;
    href: string;
  }>;
}

export const categories: Category[] = [
  {
    title: "Video Security",
    href: "/video-security",
    subcategories: [
      { title: "Men", href: "/fashion/men" },
      { title: "Women", href: "/fashion/women" },
      { title: "Kids", href: "/fashion/kids" },
    ],
  },
  {
    title: "Fire Safety",
    href: "/fire-safety",
    subcategories: [
      { title: "Phones", href: "/electronics/phones" },
      { title: "Laptops", href: "/electronics/laptops" },
      { title: "Accessories", href: "/electronics/accessories" },
    ],
  },
  {
    title: "Evacuation system",
    href: "/evacuation-system",
    subcategories: [
      { title: "Backpacks", href: "/bags/backpacks" },
      { title: "Handbags", href: "/bags/handbags" },
    ],
  },
  {
    title: "Access Control",
    href: "/access-control",
    subcategories: [
      { title: "Fresh Produce", href: "/groceries/produce" },
      { title: "Dairy", href: "/groceries/dairy" },
    ],
  },
  {
    title: "Intrusion Alarm System",
    href: "/intrusion-alarm-system",
    subcategories: [
      { title: "Shoes", href: "/footwear/shoes" },
      { title: "Sneakers", href: "/footwear/sneakers" },
    ],
  },
  {
    title: "Smart Home",
    href: "/smart-home",
    subcategories: [
      { title: "Skincare", href: "/beauty/skincare" },
      { title: "Makeup", href: "/beauty/makeup" },
    ],
  },
  {
    title: "Wellness",
    href: "/wellness",
    subcategories: [
      { title: "Supplements", href: "/wellness/supplements" },
      { title: "Fitness", href: "/wellness/fitness" },
    ],
  },
  {
    title: "Network Device",
    href: "/network-device",
    subcategories: [
      { title: "Necklaces", href: "/jewellery/necklaces" },
      { title: "Rings", href: "/jewellery/rings" },
    ],
  },
  {
    title: "Network Passive Components",
    href: "/network-passive-components",
    subcategories: [
      { title: "Necklaces", href: "/jewellery/necklaces" },
      { title: "Rings", href: "/jewellery/rings" },
    ],
  },
  {
    title: "Fiber Optic Network",
    href: "/fiber-optic-network",
    subcategories: [
      { title: "Necklaces", href: "/jewellery/necklaces" },
      { title: "Rings", href: "/jewellery/rings" },
    ],
  },
  {
    title: "Optic Passive Component",
    href: "/optic-passive-component",
    subcategories: [
      { title: "Necklaces", href: "/jewellery/necklaces" },
      { title: "Rings", href: "/jewellery/rings" },
    ],
  },
  {
    title: "VoIP",
    href: "/voip",
    subcategories: [
      { title: "Necklaces", href: "/jewellery/necklaces" },
      { title: "Rings", href: "/jewellery/rings" },
    ],
  },
  {
    title: "Server",
    href: "/server",
    subcategories: [
      { title: "Necklaces", href: "/jewellery/necklaces" },
      { title: "Rings", href: "/jewellery/rings" },
    ],
  },
  {
    title: "Cable",
    href: "/cable",
    subcategories: [
      { title: "Necklaces", href: "/jewellery/necklaces" },
      { title: "Rings", href: "/jewellery/rings" },
    ],
  },
  {
    title: "Data Storage",
    href: "/data-storage",
    subcategories: [
      { title: "Necklaces", href: "/jewellery/necklaces" },
      { title: "Rings", href: "/jewellery/rings" },
    ],
  },
  {
    title: "Monitor",
    href: "/monitor",
    subcategories: [
      { title: "Necklaces", href: "/jewellery/necklaces" },
      { title: "Rings", href: "/jewellery/rings" },
    ],
  },
  {
    title: "Solar Energy",
    href: "/solar-energy",
    subcategories: [
      { title: "Necklaces", href: "/jewellery/necklaces" },
      { title: "Rings", href: "/jewellery/rings" },
    ],
  },
  {
    title: "UPS",
    href: "/ups",
    subcategories: [
      { title: "Necklaces", href: "/jewellery/necklaces" },
      { title: "Rings", href: "/jewellery/rings" },
    ],
  },
  {
    title: "Electrical Equipment",
    href: "/electrical-equipment",
    subcategories: [
      { title: "Necklaces", href: "/jewellery/necklaces" },
      { title: "Rings", href: "/jewellery/rings" },
    ],
  },
];
