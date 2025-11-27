export interface Category {
  catId: string;
  title: string;
  href: string;
  subcategories?: Array<{
    title: string;
    href: string;
    catId?: string;
  }>;
}

export const categories: Category[] = [
  {
    catId: "69048cdd228db479bb634a90",
    title: "Video Security",
    href: "/products?catId=69048cdd228db479bb634a90",
    subcategories: [
      {
        title: "Men",
        href: "/products?catId=69048cdd228db479bb634a91",
        catId: "69048cdd228db479bb634a91",
      },
      {
        title: "Women",
        href: "/products?catId=69048cdd228db479bb634a92",
        catId: "69048cdd228db479bb634a92",
      },
      {
        title: "Kids",
        href: "/products?catId=69048cdd228db479bb634a93",
        catId: "69048cdd228db479bb634a93",
      },
    ],
  },
  {
    catId: "69048cdd228db479bb634a94",
    title: "Fire Safety",
    href: "/products?catId=69048cdd228db479bb634a94",
    subcategories: [
      {
        title: "Phones",
        href: "/products?catId=69048cdd228db479bb634a95",
        catId: "69048cdd228db479bb634a95",
      },
      {
        title: "Laptops",
        href: "/products?catId=69048cdd228db479bb634a96",
        catId: "69048cdd228db479bb634a96",
      },
      {
        title: "Accessories",
        href: "/products?catId=69048cdd228db479bb634a97",
        catId: "69048cdd228db479bb634a97",
      },
    ],
  },
  {
    catId: "69048cdd228db479bb634a98",
    title: "Evacuation system",
    href: "/products?catId=69048cdd228db479bb634a98",
    subcategories: [
      {
        title: "Backpacks",
        href: "/products?catId=69048cdd228db479bb634a99",
        catId: "69048cdd228db479bb634a99",
      },
      {
        title: "Handbags",
        href: "/products?catId=69048cdd228db479bb634a9a",
        catId: "69048cdd228db479bb634a9a",
      },
    ],
  },
  {
    catId: "69048cdd228db479bb634a9b",
    title: "Access Control",
    href: "/products?catId=69048cdd228db479bb634a9b",
    subcategories: [
      {
        title: "Fresh Produce",
        href: "/products?catId=69048cdd228db479bb634a9c",
        catId: "69048cdd228db479bb634a9c",
      },
      {
        title: "Dairy",
        href: "/products?catId=69048cdd228db479bb634a9d",
        catId: "69048cdd228db479bb634a9d",
      },
    ],
  },
  {
    catId: "69048cdd228db479bb634a9e",
    title: "Intrusion Alarm System",
    href: "/products?catId=69048cdd228db479bb634a9e",
    subcategories: [
      {
        title: "Shoes",
        href: "/products?catId=69048cdd228db479bb634a9f",
        catId: "69048cdd228db479bb634a9f",
      },
      {
        title: "Sneakers",
        href: "/products?catId=69048cdd228db479bb634aa0",
        catId: "69048cdd228db479bb634aa0",
      },
    ],
  },
  {
    catId: "69048cdd228db479bb634aa1",
    title: "Smart Home",
    href: "/products?catId=69048cdd228db479bb634aa1",
    subcategories: [
      {
        title: "Skincare",
        href: "/products?catId=69048cdd228db479bb634aa2",
        catId: "69048cdd228db479bb634aa2",
      },
      {
        title: "Makeup",
        href: "/products?catId=69048cdd228db479bb634aa3",
        catId: "69048cdd228db479bb634aa3",
      },
    ],
  },
  {
    catId: "69048cdd228db479bb634aa4",
    title: "Wellness",
    href: "/products?catId=69048cdd228db479bb634aa4",
    subcategories: [
      {
        title: "Supplements",
        href: "/products?catId=69048cdd228db479bb634aa5",
        catId: "69048cdd228db479bb634aa5",
      },
      {
        title: "Fitness",
        href: "/products?catId=69048cdd228db479bb634aa6",
        catId: "69048cdd228db479bb634aa6",
      },
    ],
  },
  {
    catId: "69048cdd228db479bb634aa7",
    title: "Network Device",
    href: "/products?catId=69048cdd228db479bb634aa7",
    subcategories: [
      {
        title: "Necklaces",
        href: "/products?catId=69048cdd228db479bb634aa8",
        catId: "69048cdd228db479bb634aa8",
      },
      {
        title: "Rings",
        href: "/products?catId=69048cdd228db479bb634aa9",
        catId: "69048cdd228db479bb634aa9",
      },
    ],
  },
  {
    catId: "69048cdd228db479bb634aaa",
    title: "Network Passive Components",
    href: "/products?catId=69048cdd228db479bb634aaa",
    subcategories: [
      {
        title: "Necklaces",
        href: "/products?catId=69048cdd228db479bb634aab",
        catId: "69048cdd228db479bb634aab",
      },
      {
        title: "Rings",
        href: "/products?catId=69048cdd228db479bb634aac",
        catId: "69048cdd228db479bb634aac",
      },
    ],
  },
  {
    catId: "69048cdd228db479bb634aad",
    title: "Fiber Optic Network",
    href: "/products?catId=69048cdd228db479bb634aad",
    subcategories: [
      {
        title: "Necklaces",
        href: "/products?catId=69048cdd228db479bb634aae",
        catId: "69048cdd228db479bb634aae",
      },
      {
        title: "Rings",
        href: "/products?catId=69048cdd228db479bb634aaf",
        catId: "69048cdd228db479bb634aaf",
      },
    ],
  },
  {
    catId: "69048cdd228db479bb634ab0",
    title: "Optic Passive Component",
    href: "/products?catId=69048cdd228db479bb634ab0",
    subcategories: [
      {
        title: "Necklaces",
        href: "/products?catId=69048cdd228db479bb634ab1",
        catId: "69048cdd228db479bb634ab1",
      },
      {
        title: "Rings",
        href: "/products?catId=69048cdd228db479bb634ab2",
        catId: "69048cdd228db479bb634ab2",
      },
    ],
  },
  {
    catId: "69048cdd228db479bb634ab3",
    title: "VoIP",
    href: "/products?catId=69048cdd228db479bb634ab3",
    subcategories: [
      {
        title: "Necklaces",
        href: "/products?catId=69048cdd228db479bb634ab4",
        catId: "69048cdd228db479bb634ab4",
      },
      {
        title: "Rings",
        href: "/products?catId=69048cdd228db479bb634ab5",
        catId: "69048cdd228db479bb634ab5",
      },
    ],
  },
  {
    catId: "69048cdd228db479bb634ab6",
    title: "Server",
    href: "/products?catId=69048cdd228db479bb634ab6",
    subcategories: [
      {
        title: "Necklaces",
        href: "/products?catId=69048cdd228db479bb634ab7",
        catId: "69048cdd228db479bb634ab7",
      },
      {
        title: "Rings",
        href: "/products?catId=69048cdd228db479bb634ab8",
        catId: "69048cdd228db479bb634ab8",
      },
    ],
  },
  {
    catId: "69048cdd228db479bb634ab9",
    title: "Cable",
    href: "/products?catId=69048cdd228db479bb634ab9",
    subcategories: [
      {
        title: "Necklaces",
        href: "/products?catId=69048cdd228db479bb634aba",
        catId: "69048cdd228db479bb634aba",
      },
      {
        title: "Rings",
        href: "/products?catId=69048cdd228db479bb634abb",
        catId: "69048cdd228db479bb634abb",
      },
    ],
  },
  {
    catId: "69048cdd228db479bb634abc",
    title: "Data Storage",
    href: "/products?catId=69048cdd228db479bb634abc",
    subcategories: [
      {
        title: "Necklaces",
        href: "/products?catId=69048cdd228db479bb634abd",
        catId: "69048cdd228db479bb634abd",
      },
      {
        title: "Rings",
        href: "/products?catId=69048cdd228db479bb634abe",
        catId: "69048cdd228db479bb634abe",
      },
    ],
  },
  {
    catId: "69048cdd228db479bb634abf",
    title: "Monitor",
    href: "/products?catId=69048cdd228db479bb634abf",
    subcategories: [
      {
        title: "Necklaces",
        href: "/products?catId=69048cdd228db479bb634ac0",
        catId: "69048cdd228db479bb634ac0",
      },
      {
        title: "Rings",
        href: "/products?catId=69048cdd228db479bb634ac1",
        catId: "69048cdd228db479bb634ac1",
      },
    ],
  },
  {
    catId: "69048cdd228db479bb634ac2",
    title: "Solar Energy",
    href: "/products?catId=69048cdd228db479bb634ac2",
    subcategories: [
      {
        title: "Necklaces",
        href: "/products?catId=69048cdd228db479bb634ac3",
        catId: "69048cdd228db479bb634ac3",
      },
      {
        title: "Rings",
        href: "/products?catId=69048cdd228db479bb634ac4",
        catId: "69048cdd228db479bb634ac4",
      },
    ],
  },
  {
    catId: "69048cdd228db479bb634ac5",
    title: "UPS",
    href: "/products?catId=69048cdd228db479bb634ac5",
    subcategories: [
      {
        title: "Necklaces",
        href: "/products?catId=69048cdd228db479bb634ac6",
        catId: "69048cdd228db479bb634ac6",
      },
      {
        title: "Rings",
        href: "/products?catId=69048cdd228db479bb634ac7",
        catId: "69048cdd228db479bb634ac7",
      },
    ],
  },
  {
    catId: "69048cdd228db479bb634ac8",
    title: "Electrical Equipment",
    href: "/products?catId=69048cdd228db479bb634ac8",
    subcategories: [
      {
        title: "Necklaces",
        href: "/products?catId=69048cdd228db479bb634ac9",
        catId: "69048cdd228db479bb634ac9",
      },
      {
        title: "Rings",
        href: "/products?catId=69048cdd228db479bb634aca",
        catId: "69048cdd228db479bb634aca",
      },
    ],
  },
];
