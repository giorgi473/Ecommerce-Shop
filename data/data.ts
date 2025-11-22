export const slides = [
  {
    id: 1,
    title: "STAY STYLISH",
    subtitle: "7 LAKH+ INFLUENCER-APPROVED STYLES",
    buttonText: "SHOP NOW",
    image:
      "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    bgGradient: "from-yellow-100 to-orange-50",
  },
  {
    id: 2,
    title: "NEW ARRIVALS",
    subtitle: "FRESH DROPS EVERY WEEK",
    buttonText: "EXPLORE NOW",
    image:
      "https://thumbs.dreamstime.com/b/beautiful-sunset-kwong-lake-rantau-panjang-kelantan-landscape-seascape-wallpaper-background-sunrise-tasik-panjg-malaysia-man-152428782.jpg",
    bgGradient: "from-pink-100 to-purple-50",
  },
  {
    id: 3,
    title: "FESTIVE COLLECTION",
    subtitle: "GET READY TO SHINE",
    buttonText: "SHOP FESTIVE",
    image:
      "https://images.pexels.com/photos/8013906/pexels-photo-8013906.jpeg?cs=srgb&dl=pexels-aurelbzh-8013906.jpg&fm=jpg",
    bgGradient: "from-red-100 to-pink-50",
  },
];

interface ShoppingCategory {
  id: number;
  image: string;
  title: string;
  href?: string;
}

export const shoppingCategories: ShoppingCategory[] = [
  {
    id: 1,
    image: "/images/kamera.webp",
    title: "კამერა",
    href: "/category/clothing",
  },
  {
    id: 2,
    image: "/images/saxanzro.png",
    title: "სახანძრო უსაფრთხოება",
    href: "/category/shoes",
  },
  {
    id: 3,
    image: "/images/bla.png",
    title: "საევაკუაციო სისტემა",
    href: "/category/watches",
  },
  {
    id: 4,
    image: "/images/kontroli.png",
    title: "დაშვების კონტროლი",
    href: "/category/jewelry",
  },
  {
    id: 5,
    image: "/images/signalizacia.png",
    title: "დაცვითი სიგნალიზაცია",
    href: "/category/electronics",
  },
  {
    id: 6,
    image: "/images/saxli.png",
    title: "ჭკვიანი სახლი",
    href: "/category/sports",
  },
  {
    id: 7,
    image: "/images/pasiuri.png",
    title: "ქსელის პასიური კომპონენტი",
    href: "/category/laptops",
  },
  {
    id: 8,
    image: "/images/qseli.png",
    title: "ქსელური მოწყობილობა",
    href: "/category/beauty",
  },
  {
    id: 9,
    image: "/images/plo.png",
    title: "ოპტიკურ-ბოჭკოვანი ქსელი",
    href: "/category/bags",
  },
  {
    id: 10,
    image: "/images/optik.png",
    title: "ოპტიკურ პასიური კომპონენტი",
    href: "/category/glasses",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    title: "სახლი და დეკორი",
    href: "/category/home",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1533995405351-2d38a6ee5e97?w=400&h=400&fit=crop",
    title: "თამაშები",
    href: "/category/games",
  },
  {
    id: 13,
    image:
      "https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=400&fit=crop",
    title: "წიგნები",
    href: "/category/books",
  },
  {
    id: 14,
    image:
      "https://images.unsplash.com/photo-1523438097911-512b1effaf4f?w=400&h=400&fit=crop",
    title: "საბავშვო",
    href: "/category/kids",
  },
  {
    id: 15,
    image:
      "https://images.unsplash.com/photo-1552642062-5ff12bd278f3?w=400&h=400&fit=crop",
    title: "ავტო აქსესუარები",
    href: "/category/auto",
  },
  {
    id: 16,
    image:
      "https://images.unsplash.com/photo-1558239014-cca34b76cb3a?w=400&h=400&fit=crop",
    title: "შინაური ცხოველები",
    href: "/category/pets",
  },
];

export const products = [
  {
    id: 1,
    brand: "ftDiva",
    title: "Mandarin collar printed a-line kurta",
    originalPrice: 899,
    discountedPrice: 100,
    discount: 89,
    rating: 4.5,
    image: ["/images/saxli.png", "/images/bla.png"],
  },
  {
    id: 2,
    brand: "Campus Sutra",
    title: "Men Comfort Cuban Collar Shirt",
    originalPrice: 2200,
    discountedPrice: 785,
    discount: 64,
    rating: 4.8,
    image: ["/images/saxli.png", "/images/qseli.png"],
  },
  {
    id: 3,
    brand: "Allen Solly",
    title: "Men Pure Cotton Striped Casual Shirt",
    originalPrice: 2299,
    discountedPrice: 1199,
    rating: 4.3,
    image: ["/images/saxli.png", "/images/optik.png"],
  },
  {
    id: 4,
    brand: "all about you",
    title: "Embroidered Satin Saree",
    originalPrice: 5500,
    discountedPrice: 2199,
    discount: 60,
    rating: 4.7,
    image: ["/images/saxli.png", "/images/plo.png"],
  },
  {
    id: 5,
    brand: "kaseee",
    title: "Embellished Embroidered Saree",
    originalPrice: 4999,
    discountedPrice: 1922,
    discount: 62,
    rating: 4.6,
    image: ["/images/saxli.png", "/images/saxanzro.png"],
  },
  {
    id: 6,
    brand: "Koskii",
    title: "Floral Beads and Stones Lehenga",
    originalPrice: 24500,
    discountedPrice: 12999,
    discount: 47,
    rating: 4.4,
    image: ["/images/saxli.png", "/images/qseli.png"],
  },
  {
    id: 7,
    brand: "Tikhi Imli",
    title: "Embellished Sequinned Ready to Wear Saree",
    originalPrice: 2650,
    discountedPrice: 1199,
    discount: 55,
    rating: 4.6,
    image: ["/images/saxli.png", "/images/plo.png"],
  },
  {
    id: 8,
    brand: "Libas",
    title: "Ethnic Motifs Printed Kurta Set",
    originalPrice: 1799,
    discountedPrice: 629,
    discount: 65,
    rating: 4.2,
    image: ["/images/saxli.png", "/images/pasiuri.png"],
  },
  {
    id: 9,
    brand: "Tikhi Imli",
    title:
      "Embellished Sequinned Ready to Wear Saree Ethnic Motifs Printed Kurta Set",
    originalPrice: 2650,
    discountedPrice: 1199,
    discount: 55,
    rating: 4.6,
    image: ["/images/saxli.png", "/images/optik.png"],
  },
  {
    id: 10,
    brand: "Libas",
    title: "Ethnic Motifs Printed Kurta Set",
    originalPrice: 1799,
    discountedPrice: 629,
    discount: 65,
    rating: 4.2,
    image: ["/images/saxli.png", "/images/kamera.webp"],
  },
  {
    id: 11,
    brand: "Tikhi Imli",
    title: "Embellished Sequinned Ready to Wear Saree",
    originalPrice: 2650,
    discountedPrice: 1199,
    discount: 55,
    rating: 4.6,
    image: ["/images/saxli.png", "/images/images.jpg"],
  },
  {
    id: 12,
    brand: "Libas",
    title: "Ethnic Motifs Printed Kurta Set",
    originalPrice: 1799,
    discountedPrice: 629,
    discount: 65,
    rating: 4.2,
    image: ["/images/saxli.png", "/images/bla.png"],
  },
];
